document.addEventListener('DOMContentLoaded', () => {
    const benefitsItems = document.querySelectorAll('.benefits-item');
    const modal = document.getElementById('benefits-modal');
    const closeModal = document.querySelector('.close');
    const modalTitle = document.getElementById('modal-title');
    const modalText = document.getElementById('modal-text');

    const benefitsDetails = {
      expertise: {
        title: "Expertise",
        text: "As a highly experienced developer, I have deep knowledge of programming and website development. I have worked on various complex projects, ensuring high performance and scalability. My expertise spans multiple programming languages and frameworks, making me a versatile developer who can tackle any challenge."
      },
      communication: {
        title: "Communication",
        text: "Understanding your needs and wants is my priority and I am always open to discussions and corrections. I value clear and effective communication, which helps in delivering exactly what the client envisions. Regular updates and feedback sessions are part of my workflow to ensure satisfaction."
      },
      art: {
        title: "Art",
        text: "Thanks to my creative nature, I am ready to accept challenges and help you bring your ideas to life. I integrate artistic elements into my development process, ensuring that the final product is not only functional but also visually appealing and user-friendly."
      },
      execution: {
        title: "Urgent execution",
        text: "I understand how important time is to you. Ready to work quickly and efficiently, without reducing the quality of work. My streamlined processes and dedication to deadlines ensure that your project is completed on time, every time, with the highest standards of quality."
      }
    };

    benefitsItems.forEach(item => {
      item.addEventListener('click', () => {
        const benefitType = item.dataset.benefit;
        const benefit = benefitsDetails[benefitType];

        modalTitle.textContent = benefit.title;
        modalText.textContent = benefit.text;

        modal.style.display = 'block';
      });
    });

    closeModal.addEventListener('click', () => {
      modal.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
      if (event.target === modal) {
        modal.style.display = 'none';
      }
    });
  });