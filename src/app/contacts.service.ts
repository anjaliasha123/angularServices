import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class ContactsService {
  contactList = [];

  getService() {
    this.contactList = [
      { contactId: 1, contactName: "A" },
      { contactId: 2, contactName: "B" },
      { contactId: 3, contactName: "C" },
      { contactId: 4, contactName: "D" }
    ];
    return this.contactList;
  }
}
