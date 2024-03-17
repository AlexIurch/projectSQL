<template>
  <link href="https://use.fontawesome.com/releases/v5.15.4/css/all.css" rel="stylesheet">

  <div class="contact-container">
    <div class="contact-header">
      <h1>Get In Touch!</h1>
      <p>Have suggestions or questions? I'd love to hear from you.</p>
    </div>
    <div class="contact-content">
      <i class="fas fa-envelope email-icon" @click="showContactForm = !showContactForm"></i>
      <transition name="fade">
        <div class="contact-form" v-if="showContactForm">
          <form @submit.prevent="sendEmail">
            <div class="form-group">
              <input type="email" v-model="userEmail" placeholder="Your Email" required>
            </div>
            <div class="form-group">
              <textarea v-model="userMessage" placeholder="Your Message" required rows="4"></textarea>
            </div>
            <button type="submit" class="submit-btn">Send Message</button>
          </form>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NavContact',
  data() {
    return {
      showContactForm: false,
      userEmail: '',
      userMessage: '',
    };
  },
  methods: {
    sendEmail() {
      // Logic to send an email
      console.log('Email sent:', this.userEmail, this.userMessage);
      // Reset form after sending
      this.userEmail = '';
      this.userMessage = '';
      // Optionally close the form
      this.showContactForm = false;
    },
  },
};
</script>


<style scoped>
.contact-container {
  max-width: 800px;
  margin: 50px auto;
  padding: 20px;
  background: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.contact-container:hover {
  transform: translateY(-5px);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
}

.contact-header h1,
.contact-header p {
  text-align: center;
}

.email-link {
  display: block;
  text-align: center;
  margin: 20px auto;
  color: #2196f3;
  font-weight: bold;
  transition: color 0.2s ease;
}

.email-link:hover {
  color: #0d47a1;
}

.fas.fa-envelope {
  display: block;
  text-align: center;
  cursor: pointer;
  font-size: 24px;
  color: #2196f3;
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
}

.contact-form {
  margin-top: 20px;
}

.form-group {
  margin-bottom: 20px;
}

.form-group input,
.form-group textarea {
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  box-sizing: border-box;
  transition: border-color 0.2s ease;
}

.form-group input:focus,
.form-group textarea:focus {
  border-color: #2196f3;
  outline: none;
}

.submit-btn {
  width: 100%;
  background-color: #2196f3;
  color: white;
  padding: 10px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.submit-btn:hover {
  background-color: #0d47a1;
}
</style>
