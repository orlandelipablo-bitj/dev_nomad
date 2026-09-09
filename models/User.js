export class User {
    constructor({ uid, email, displayName, photoURL, emailVerified, phoneNumber, createdAt, updatedAt }) {
        this.uid = uid;
        this.email = email;
        this.displayName = displayName || '';
        this.photoURL = photoURL || '';
        this.emailVerified = emailVerified || false;
        this.phoneNumber = phoneNumber || '';
        this.createdAt = createdAt || new Date();
        this.updatedAt = updatedAt || new Date();
    }
}