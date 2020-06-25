const webPush = require("web-push");

const vapidKeys = {
    publicKey : "BM5PQQiuv563IfG-8Xqxi34wMkFT184wtt9XqZF4k8B_4K_HJ3oWPfODgKrhU0uJ_neMZXE4lajmi-7AUuolZ80",
    privateKey : "6DLDaaJC-bgGMWbsZ5R6dn8keuWtYXnKLquYBR63RVI"
}

const subscription = {
    endpoint : "https://fcm.googleapis.com/fcm/send/ed_NPR0InGg:APA91bEIEDOtzYveR9MLrnTTVwzqh_pTj8oNp0vagk5mDcerVTdvgJOVlL89JYzx9YdjJ3phTD_TnkpNM4ngVYLM0GWMTL8iBOMKToT1kJDwXiieXMhEUSoEwhQn-psBoDO5nfS9QYI8",
    keys : {
        p256dh : "BLoG8UWgPKXHgkFl+/tCeO8mdaPHhaiVRDPcOwbAN4JfcykM9WUr93NhP6g8wGdvEN9xnEgBsFn4TS3l1hunAGE=",
        auth : "u2uPWWnEFACMBvsuGOTQxg=="
    }
}

const options = {
    gcmAPIKey : "605055428101",
    TTL : 60
}

webPush.setVapidDetails('mailto:fauzanfm375@gmail.com',vapidKeys.publicKey,vapidKeys.privateKey)

let payloads = "selamat! push notification dan subscription berhasil di gunakan"

webPush.sendNotification(
    subscription,
    payloads,
    options
)