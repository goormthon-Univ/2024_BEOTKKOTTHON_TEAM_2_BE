import { Injectable } from '@nestjs/common';
import * as admin from 'firebase-admin';

@Injectable()
export class FcmService {
  private readonly fcm: admin.messaging.Messaging;

  constructor() {

    admin.initializeApp({
      credential: admin.credential.applicationDefault(),
    });

    this.fcm = admin.messaging();
  }

  async sendNotification(token: string, title: string, body: string): Promise<void> {
    try {
      await this.fcm.send({
        token: token,
        notification: {
          title: title,
          body: body,
        },
      });
    } catch (error) {
      console.error('Error sending FCM notification:', error);
    }
  }
}
