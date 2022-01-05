export const config = {
  PAGE_INFO: {
    AUTHOR: {
      DISPLAYNAME: 'Devels Agency',
      WEBSITE: 'https://devels.agency',
      INSTAGRAM: '@develsagency'
    },

    SEO: {
      pageTitle: 'La Casa de mi Padre'
    }
  },

  CHURCH_INFO: {
    EMAIL: 'lcpcaracas@gmail.com',
    PHONE: {
      FIRST_OPTION: '0212-578-5969',
      SECOND_OPTION: '0424-149-8800'
    }
  },

  FIREBASE: {
    INIT_APP: {
      apiKey: "AIzaSyBfJ-4c8hMUfODbt5hIDbdaISgZqfayr6Q",
      authDomain: "lcp-caracas-test.firebaseapp.com",
      databaseURL: "https://lcp-caracas-test-default-rtdb.firebaseio.com",
      projectId: "lcp-caracas-test",
      storageBucket: "lcp-caracas-test.appspot.com",
      messagingSenderId: "456792375106",
      appId: "1:456792375106:web:df022c46417a443b72d2db",
      measurementId: "G-WFZ5XRWKYE"
    },

    PUSH_NOTIFICATIONS: {
      API_KEY: process.env.FIREBASE_PUSH_NOTIFICATIONS_API_KEY
    }
  },

  RESERVATIONS: {
    MAX_RESERVATIONS: 250,
    WORSHIPS: {
      FIRST_WORSHIP: {
        id: 'firstWorship',
        hour: '8:30 a.m',
        schedule: '1er Servicio (8:30 a.m)',
        label: 'Primer Servicio'
      },

      SECOND_WORSHIP: {
        id: 'secondWorship',
        hour: '10:15 a.m',
        schedule: '2do Servicio (10:15 a.m)',
        label: 'Segundo Servicio'
      },

      THIRD_WORSHIP: {
        id: 'thirdWorship',
        hour: '12:00 p.m',
        schedule: '3er Servicio (12:00 p.m)',
        label: 'Tercer Servicio'
      }
    }
  }
}