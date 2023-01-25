import { ReactSession }  from 'react-client-session';

ReactSession.set("username", "Bob");
ReactSession.get("username");  // Returns "Bob"