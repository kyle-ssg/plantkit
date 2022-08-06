const FCM = require('fcm-push');
const config = process.env.key
const APP_NAME = 'ssg-boilerplate';
const fcm = new FCM(config);


//See
const sendPush = (to, title, body, data, tag) => {
    try {
        var message = {
            to, // required fill with device token or topics
            notification: {  //https://firebase.google.com/docs/reference/admin/node/admin.messaging.NotificationMessagePayload
                title,
                body,
                click_action: 'fcm.' + APP_NAME + '.open',
                icon: 'ic_notification',
                sound: 'default',
                badge: "1",
            },
            // see https://firebase.google.com/docs/reference/admin/node/admin.messaging.MessagingOptions
            priority: "high",
            content_available: true
        };
        message.data = data;

        if (tag) {
            message.notification.tag = tag;
        }

        fcm.send(message, function (err, response) {
            if (err) {
                console.log("Something has gone wrong!", err);
            } else {
                console.log("Successfully sent with response: ", response);
            }
        });
    } catch (e) {
        console.log(e);
    }
};


sendPush(
    '/topics/all',
    'This is a push!',
    'This is a body',
    {
        route: {
            screen: "showExampleLightbox",
            data: {
                customData:"bla"
            }
        }
    },
    'message');
