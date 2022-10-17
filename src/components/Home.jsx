import logo from '../logo_hedy.jpg';
const Home = () => {
    return (
        <div style={{backgroundColor: 'pink', height: '90vh'}}>
            <h1>Bienvenido</h1>
            <h2>Acá se podrán ver los proyectos que hicimos en la primer parte del Bootcamp Hedy</h2>
            <img src={logo} alt="" />
        </div>
    );
}
 
export default Home;