import axios from 'axios';
import { url } from '../utils/Utils';

const urlScanAPI = async (
  urlParam: string,
  userCredentials?: any,
  accessKey?: string,
  secretKey?: string,
  max_limit?: number,
  query_source?: string
) => {
  try {
    const formData = new FormData();
    formData.append('uri', userCredentials?.uri);
    formData.append('userName', userCredentials?.userName);
    formData.append('password', userCredentials?.password);
    formData.append('source_url', urlParam);
    if (accessKey?.length) {
      formData.append('aws_access_key_id', accessKey);
    }
    if (secretKey?.length) {
      formData.append('aws_secret_access_key', secretKey);
    }
    if (query_source?.length) {
      formData.append('query_source', query_source);
    }
    if (max_limit != undefined) {
      formData.append('max_limit', max_limit.toString());
    }

    const response = await axios.post(`${url()}/url/scan`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return response;
  } catch (error) {
    console.log('Error uploading file:', error);
    throw error;
  }
};

export { urlScanAPI };