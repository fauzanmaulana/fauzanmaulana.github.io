const webPush = require("web-push");

const vapidKeys = {
    publicKey : "BM5PQQiuv563IfG-8Xqxi34wMkFT184wtt9XqZF4k8B_4K_HJ3oWPfODgKrhU0uJ_neMZXE4lajmi-7AUuolZ80",
    privateKey : "6DLDaaJC-bgGMWbsZ5R6dn8keuWtYXnKLquYBR63RVI"
}

const subscription = {
    endpoint : "https://fcm.googleapis.com/fcm/send/dloYblYv3WU:APA91bEeKanEl9uHWYxHNMAeV0-U0r29L-o5i0MbtMZs2n1WnlVOSuIhC1eq0PjoQbdN2PRaBFsFgSJWZZnwYwtrVXabibhkGNOHhPCLk1voonpdITzuT62nFr6f3lR2merFfbGm5VRS",
    keys : {
        p256dh : "BBOF3kqArbvh05kbBGWtEd9XO1Mw4cHkt9+DZ730NmKzMSLNjYHXLT8Jm1JhsQ/16eOri04jogsw3DC2OMqVnxk=",
        auth : "UoXMYF4z4+FLvLCPgz0wEA=="
    }
}

const options = {
    gcmAPIKey : "87530509810",
    TTL : 60
}

webPush.setVapidDetails('mailto:fauzanfm375@gmail.com',vapidKeys.publicKey,vapidKeys.privateKey)

let payloads = "selamat! push notification dan subscription berhasil di gunakan"

webPush.sendNotification(
    subscription,
    payloads,
    options
)