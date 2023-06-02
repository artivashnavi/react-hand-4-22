import './Student.css';
// import {Link} from 'react-router-dom'

const Student=()=>{
    return(
        <div>
            <h1>Students Details</h1>
            <button type="submit">Add new student</button>
            <div>
                <table>
                    <tr>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Course</th>
                        <th>Batch</th>
                        <th>Change</th>
                    </tr>
                    <tr>
                        <td>John</td>
                        <td>18</td>
                        <td>MERN</td>
                        <td>2018</td>
                        <td>Edit</td>
                    </tr>
                    <tr>
                        <td>John</td>
                        <td>19</td>
                        <td>MERN</td>
                        <td>2019</td>
                        <td>Edit</td>
                    </tr>
                    <tr>
                        <td>John</td>
                        <td>20</td>
                        <td>MERN</td>
                        <td>2020</td>
                        <td>Edit</td>
                    </tr>
                    <tr>
                        <td>John</td>
                        <td>21</td>
                        <td>MERN</td>
                        <td>2021</td>
                        <td>Edit</td>
                    </tr>
                    <tr>
                        <td>John</td>
                        <td>22</td>
                        <td>MERN</td>
                        <td>2022</td>
                        <td>Edit</td>
                    </tr>


                </table>
            </div>
        </div>
    )
}
export default Student;