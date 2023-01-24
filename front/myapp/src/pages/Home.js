function Home(){
    class Users extends React.Component{
        constructor(props){
            super(props);
        }
    

    render() {
        const users = JSON.parse(this.props.users);
        return (
            <table>
                <tbody>
                    <tr>
                        <td>Prénom</td>
                        <td>Nom</td>
                        <td>Mail</td>
                    </tr>
                    {
                        users.map(users => {
                            return (
                                    <tr key={users.id}>
                                        <td>{users.first_name}</td>
                                        <td>{users.last_name}</td>
                                        <td>{users.mail}</td>
                                    </tr>
                                );
                            }
                        )
                    }
                </tbody>
            </table>
        );
    }
}
}