import { useLocation, useParams, useNavigate } from 'react-router-dom';

function AppDetails() {
  const location = useLocation();
  const { id } = useParams();
  const navigate = useNavigate();
  const app = location.state?.app;

  if (!app) {
    return (
      <div>
        <p>App data not found. Loading from API...</p>
      </div>
    );
  }

  return (
    <>
        <div className="bg-[#D2D2D2]">
            <div className='p-15 flex gap-10'>
                <img className='w-[350px] h-[350px] ' src={app.image} alt={app.name} />
                <div>
                    <div>
                        <h1 className='text-5xl text-black font-semibold mb-5'>{app.title}</h1>
                        <p>Developed by <span>{app.companyName}</span></p>
                    </div>
                </div>
            </div>
        </div>
    </>
  );
}

export default AppDetails;
