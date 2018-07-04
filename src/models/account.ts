export class Account {

    account: string;
    password: string;
    site: string;
    description: string;
    icon: string;
    
    constructor(account: string, password: string, site: string, description: string, icon: string) {
        this.account = account;
        this.password = password;
        this.site = site;
        this.description = description;
        this.icon = icon;
    } 
  
  }