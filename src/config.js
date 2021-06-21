const config = {
    s3: {
      REGION: "us-east-1",
      BUCKET: "sst-notes-app",
    },
    apiGateway: {
      REGION: "us-east-1",
      URL: "https://bye6l0gask.execute-api.us-east-1.amazonaws.com/prod/",
    },
    cognito: {
      REGION: "us-east-1",
      USER_POOL_ID: "us-east-1_Al0p8XDh0",
      APP_CLIENT_ID: "d3v591htqt9n46hvkbf0dt53s",
      IDENTITY_POOL_ID: "us-east-1:533705bd-7b8a-4c90-9694-985f0dcef1a9",
    },
  };
  
  export default config;