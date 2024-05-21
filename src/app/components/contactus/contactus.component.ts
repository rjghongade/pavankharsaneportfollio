import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import emailjs from 'emailjs-com';
@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent {
  formData = {
    name: '',
    email: '',
    contact: '',
    message: ''
  };

  constructor(private toastr: ToastrService) { }
  
  async send() {
    try {
      debugger;
      emailjs.init('-B_08eJrify3qJTMj');
      let response = await emailjs.send("service_p7gul7i","template_o4mu1ev", {
        from_name: this.formData.name,
        to_name: "Admin",
        contact: this.formData.contact,
        message: this.formData.message,
        from_email: this.formData.email,
      });
      console.log('Email sent successfully!', response);
      this.toastr.success('Hello, world!', 'Success');
      this.formData = { name: '', email: '', contact: '', message: '' }; 
    } catch (error) {
      console.error('Error sending email:', error);
      this.toastr.error('Hello, world!', 'Error');
    }
  }
}
