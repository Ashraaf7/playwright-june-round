interface Notification {
    send(message: string): void;
    clear(): void;
}



class EmailNotification implements Notification {
    send(message: string): void {
        console.log(`Sending email: ${message}`);
    }
    clear(): void {
        console.log(`Clearing email notifications`);
    }
}

class PushNotification implements Notification {
    send(message: string): void {
        console.log(`Sending push notification: ${message}`);
    }
    clear(): void {
        console.log(`Clearing push notifications`);
    }
}