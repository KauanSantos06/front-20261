import { useParams } from 'react-router';

function Dashboard(){
    const {id} = useParams();

    return (
        <>
        <h1> Bem vindo ao DashBoard {id} </h1>
        </>
    );
}

export default Dashboard;