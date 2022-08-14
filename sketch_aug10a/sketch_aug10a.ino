#include <SPI.h>
#include <WiFiNINA.h>
#include <Bridge.h>
#include <HttpClient.h>

///////please enter your sensitive data in the Secret tab/arduino_secrets.h
char ssid[] = "2.4Ghz Where's the any key?";        // your network SSID (name)
char pass[] = "Succul3nt!";    // your network password (use for WPA, or use as key for WEP)
int status = WL_IDLE_STATUS;     // the Wifi radio's status
char data[] = "";

#define MAXREADINGS 50
#define INT_DELAY  100
#define SERIAL_FREQUENCY 5


;float wets[] = {200.0,212.0,200.0,180,180,180};
float drys[] = {521.0,521.0,522.0,400,400,400};
int readings1[MAXREADINGS];
int readings2[MAXREADINGS];
int readings3[MAXREADINGS];
int readings4[MAXREADINGS];
int readings5[MAXREADINGS];
int readings6[MAXREADINGS];
int index;
boolean arraysAreReady;

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
  status = WiFi.beginAP(ssid, pass);

 if (status != WL_AP_LISTENING) {
    Serial.println("Creating access point failed");
    // don't continue
    while (true);
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
  Serial.print("Digital");
  digitalRead(0);
  
  Serial.print("Index is = ");
  Serial.print(index);
  Serial.println("");
  Serial.print("A0 - ");
  Serial.print(calculateAverage(readings1));
  Serial.println("");
  Serial.print("A1 - ");
  Serial.print(calculateAverage(readings2));
  Serial.println("");
  Serial.print("A2 - ");
  Serial.print(calculateAverage(readings3));
  Serial.println("");
  Serial.print("A3 - ");
  Serial.print(calculateAverage(readings4));
  Serial.println("");
  Serial.print("A4 - ");
  Serial.print(calculateAverage(readings5));
  Serial.println("");
  Serial.print("A5 - ");
  Serial.print(calculateAverage(readings6));
  Serial.println("");
}

// -----------------------------------------------------------------
//
// -----------------------------------------------------------------

float getPercentage(float v,int index) {
  int wet = wets[index];
  int dry = drys[index];
//  Serial.print("index:");
//  Serial.print(index);
//  Serial.println("");
//  Serial.print("wet:");
//  Serial.print(wet);
//  Serial.println("");
//  Serial.println("");
//  Serial.print("dry:");
//  Serial.print(dry);
//  Serial.println("");
//  Serial.print("actual:");
//  Serial.print(v);
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

  
//  readings1[index] = analogRead(A0);
//  readings2[index] = analogRead(A1);
//  readings3[index] = analogRead(A2);
//  readings4[index] = analogRead(A3);
//  readings5[index] = analogRead(A4);
//  readings6[index] = analogRead(A5);
  if (++index >= MAXREADINGS) {
    arraysAreReady = true;
    index = 0;
  }
}

void  postData() {

  HttpClient client;
  client.get("http://www.arduino.cc/asciilogo.txt");
  while (client.available()) {
    char c = client.read();
    Serial.print(c);
  }
  Serial.flush();
  delay(5000);
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
  delay(INT_DELAY);
  if (index % SERIAL_FREQUENCY == 0) {
    displayAverages();
  }
  }
