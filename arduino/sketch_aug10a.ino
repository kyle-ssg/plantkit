#include <SPI.h>
#include <WiFiNINA.h>
#include <Bridge.h>

///////please enter your sensitive data in the Secret tab/arduino_secrets.h
char ssid[] = "2.4Ghz Where's the any key?";        // your network SSID (name)
char pass[] = "Succul3nt!";    // your network password (use for WPA, or use as key for WEP)
int status = WL_IDLE_STATUS;     // the Wifi radio's status

#define MAXREADINGS 10 // How many readings to hold for average
#define INT_DELAY  1000 // How long to delay per reading
#define REQUEST_FREQUENCY 100 // How many readings to do before posting to the server

float wets[] = {200.0,212.0,200.0,180,180,180}; // Analog readings that are considered 100%
float drys[] = {521.0,521.0,522.0,400,400,400}; // Analog readings that are considered 0%
char server[] = "plantkit.vercel.app";    // name address for Google (using DNS)

// Analog readings
int readings1[MAXREADINGS];
int readings2[MAXREADINGS];
int readings3[MAXREADINGS];
int readings4[MAXREADINGS];
int readings5[MAXREADINGS];
int readings6[MAXREADINGS];

int index; // Current index for averages
int readIndex; // Current index for reads
int lastPosted;
int lastPosted2;
boolean arraysAreReady; // Whether to start recalculating the average again

// -----------------------------------------------------------------
//
// -----------------------------------------------------------------

void connect()
{
if (WiFi.status() == WL_NO_MODULE) {
    Serial.println("Communication with WiFi module failed!");
    // don't continue
    while (true);
  }

  String fv = WiFi.firmwareVersion();

  if (fv < WIFI_FIRMWARE_LATEST_VERSION) {
    Serial.println("Please upgrade the firmware");
  }
  Serial.print("Creating access point named: ");

  Serial.println(ssid);

  // Create open network. Change this line if you want to create an WEP network:
  status = WiFi.begin(ssid, pass);

   while (WiFi.status() != WL_CONNECTED) {  //Wait for the WiFI connection completion
    delay(500);
    Serial.println("Waiting for connection");
  }


 // print the SSID of the network you're attached to:
  Serial.print("SSID: ");
  Serial.println(WiFi.SSID());
  // print your WiFi shield's IP address:
  IPAddress ip = WiFi.localIP();
  Serial.print("IP Address: ");
  Serial.println(ip);
}



// -----------------------------------------------------------------
//
// -----------------------------------------------------------------

int calculateAverage(int * readings)
{
  long sum = 0UL;
  if (arraysAreReady) {
    // we know we have MAXREADINGS correct values
    for (byte n = 0; n < MAXREADINGS; n++) sum += readings[n];
    return sum / MAXREADINGS;
  } else {
    // we don't have a full array, only up to index-1
    if (index) {
      // we have at least 1 reading
      for (byte n = 0; n < index; n++) sum += readings[n];
      return sum / index;
    } else {
      // we have never put any value in the array, return error flag
      return -1; // indicate error
    }
  }
}

// -----------------------------------------------------------------
//
// -----------------------------------------------------------------

void displayAverages()
{
  lastPosted = calculateAverage(readings1) * 1;
  lastPosted2= calculateAverage(readings2) * 1;
  postData("{\"1\":" + String(lastPosted)+",\"2\":"+ String(lastPosted2) + "}");
}

void displayReading(int reading, int reading2)
{
  lastPosted = reading * 1;
  lastPosted2 = reading2 * 1;
  postData("{\"1\":" + String(lastPosted)+",\"2\":"+ String(lastPosted2) + "}");
}

// -----------------------------------------------------------------
//
// -----------------------------------------------------------------

float getPercentage(float v,int index) {
  int wet = wets[index];
  int dry = drys[index];
  float valueBaseline = v-wet;
  float baseline = dry-wet;
  float value = (float) valueBaseline/baseline;
  return 100-(value*100);
}

void readSensors()
{
  readings1[index] = getPercentage(analogRead(A0),0);
  readings2[index] = getPercentage(analogRead(A1),1);
  readings3[index] = getPercentage(analogRead(A2),2);
  readings4[index] = getPercentage(analogRead(A3),3);
  readings5[index] = getPercentage(analogRead(A4),4);
  readings6[index] = getPercentage(analogRead(A5),5);

  if (++index >= MAXREADINGS) {
    arraysAreReady = true;
    index = 0;
  }
}

WiFiClient client;

void postData(String body){
  if(WiFi.status()== WL_CONNECTED){   //Check WiFi connection status
     if (client.connectSSL(server, 443)){
      Serial.println("connected to server");
      client.println("POST /api/record/ HTTP/1.1");
      client.println("Accept: text/html");
      client.println("User-Agent: Arduino");
      client.println("Content-Length: " + String(body.length()));
      client.println("Host: plantkit.vercel.app");
      client.println("Connection: close");
      client.println();
      client.println(body);
     }else{
      Serial.println("Error connecting to server");
     }
  }
}


// -----------------------------------------------------------------
//
// -----------------------------------------------------------------

void setup()
{
  Serial.begin(9600);
  while(!Serial);
  Serial.println("Hi world");
  connect();
  index = 0;
  arraysAreReady = false;
}

void loop()
{
  readSensors();
  readIndex ++;
  int currentAverage = calculateAverage(readings1);
  int currentReading = readings1[index-1] * 1;
  int currentAverage2 = calculateAverage(readings2);
  int currentReading2 = readings2[index-1] * 1;
  int difference = currentReading - lastPosted;
  int differenceR2 = currentReading2 - lastPosted2;

  if (readIndex == REQUEST_FREQUENCY) {
    readIndex = 0;
    displayAverages();
  } else if ((difference<=-5 || difference>=5) || (differenceR2<=-5 || differenceR2>=5)) { // Data is changing rapidly, keep sending up until it levels out
    delay(INT_DELAY/2);
    readSensors(); // Take another reading to make sure it wasn't a fluke
    int currentReading2 = readings1[index-1] * 1;
    int difference2 = currentReading2 - lastPosted;
    int currentReading2R2 = readings2[index-1] * 1;
    int difference2R2 = currentReading2R2 - lastPosted2;
    if ((difference2<=-5 || difference2>=5) || (difference2R2<=-5 || difference2R2>=5)) {
      displayReading(currentReading2, currentReading2R2);
    }
    //Clear all averages as they will be skewed
    readIndex = 0;
    index = 0;
  }

    delay(INT_DELAY);

}
