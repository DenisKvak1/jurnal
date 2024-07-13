import { setHttpHeaders } from '../../axios.ts';
import { Region, ServerResponse } from '@/types.ts';

export class AuthenticationAPI {
    setAuthenticationToken(token: string):void {
        setHttpHeaders('Authorization', `Bearer ${token}`);
    }

    setServerLanguage(language: Region):void {
        setHttpHeaders('Accept-Language', language);
    }

    async testAuthenticationToken(token: string): Promise<boolean>{
        token.trim();
        return false
    }

    async login(email: string, password: string): Promise<ServerResponse>{

    }
}
export const authenticationAPI = new AuthenticationAPI();