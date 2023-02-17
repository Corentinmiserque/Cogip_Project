import { useLocation } from 'react-router-dom';

function Dashboard_Herosection() {
  const location = useLocation();
  const name = location.pathname.slice(1);

  return (
    <>
    
        <div className='dashboard_herosection'>
            <h3>Dashboard</h3>
            <h4>{name}</h4>
        </div>
        <div className="dashboard_herosection_containers">
            <section className='dashboard_herosection_containers_container1'>
           <h2>Welcome back Henry!</h2> 
           <p>You can here add an invoice, a company and some contacts.</p>
           </section>
           <section className='dashboard_herosection_containers_container2'>
            <img src="../../../../public/img/Layer2.svg" alt="dashboard_herosection" />
            </section>
        </div>

    </>
  );
}
export default Dashboard_Herosection