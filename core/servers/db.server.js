import { connect } from 'mongoose';
export const connectToDBServer = async (connectionURI) => {
    await connect(connectionURI);
};
