import Angular from './images/angular.jpg';
import Bootstrap from './images/bootstrap5.png';
import Ccsharp from './images/ccsharp.png';
import Frontend from './images/kompleweb.jpg';

function Course({courseName}) {
    console.log(Angular);
    console.log(courseName);
    return <div>
        <img src={Angular} alt="" />
    </div>;
}

export default Course;

