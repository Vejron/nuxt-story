import { GraphQLClient } from 'graphql-request';

const graphcmsClient = new GraphQLClient(
  'https://api-eu-central-1.graphcms.com/v2/ckj7f0uhigdj501z5c96q5rvc/master'
);

export default (_, inject) => {
  inject('graphcms', graphcmsClient);
};