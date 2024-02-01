import React, {useState} from 'react';
import './header.css';

const Header = () => {
        /* TOGGLE MENU */
        const[Toggle, showMenu] = useState(false);
    return (
        <header className='header'>
            <nav className="nav container">
                <a href="index.html" className='nav_logo'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 64 64" id="salad"><circle cx="10" cy="28" r="4" fill="#feebca"></circle><circle cx="16" cy="22" r="4" fill="#f9d4ac"></circle><path fill="#4abaaa" d="M27,26a6,6,0,1,1,2.46582-11.47168l.83984.37988.44629-.80761a5.994,5.994,0,1,1,2.78223,8.37109l-.83984-.37988-.44629.80761A6,6,0,0,1,27,26Z"></path><path fill="#6ad3b5" d="M49.93262,40.31055a6.94469,6.94469,0,0,1-6.18555-3.76465l-.25781-.49756-.55957-.03955a7.04428,7.04428,0,0,1-6.20508-4.93311,6.92942,6.92942,0,0,1,2.39746-7.5664l.668-.51758-.39844-.74561a6.81439,6.81439,0,0,1-.51465-1.23925,6.99967,6.99967,0,1,1,13.3877-4.09278A6.8555,6.8555,0,0,1,52.5293,18.23l.085.8418.84472.05566a6.93191,6.93191,0,0,1,6.21778,4.93311,7.04611,7.04611,0,0,1-2.3877,7.55957l-.4414.3457.06445.55664A6.9897,6.9897,0,0,1,52,40.00049a7.08747,7.08747,0,0,1-2.06641.31006Z"></path><circle cx="21" cy="31" r="10" fill="#f3f9ff"></circle><circle cx="21" cy="31" r="6" fill="#f4eb7a"></circle><circle cx="32" cy="31" r="11" fill="#ff738e"></circle><path fill="#8abcf9" d="M19,63V57.41357l-.51172-.28613A27.50042,27.50042,0,0,1,4,33V31H60v2A27.50042,27.50042,0,0,1,45.51172,57.12744L45,57.41357V63Z"></path><path fill="#ffc751" d="M15,13a6.95927,6.95927,0,0,1-4.9502-2.0498l9.9004-9.9004A7.00064,7.00064,0,0,1,15,13Z"></path><circle cx="53" cy="5" r="3" fill="#f4eb7a"></circle><rect width="26" height="5" x="19" y="58" fill="#6fa0ef"></rect><path fill="#c3dbfc" d="M4.30078,37A27.41253,27.41253,0,0,1,4,33V31H60v2a27.41253,27.41253,0,0,1-.30078,4Z"></path><path fill="#2a2b35" d="M32 23.9751a.99974.99974 0 00-1 1v2a1 1 0 002 0v-2A.99974.99974 0 0032 23.9751zM27.707 26.26807A.99989.99989 0 0026.293 27.68213l1 1A.99989.99989 0 0028.707 27.26807zM36.293 26.26807l-1 1A.99989.99989 0 1036.707 28.68213l1-1A.99989.99989 0 1036.293 26.26807zM15 13.9751A8.00053 8.00053 0 0020.65723.31787a.99964.99964 0 00-1.41407 0L9.34277 10.21826a1.00022 1.00022 0 000 1.41455A7.95226 7.95226 0 0015 13.9751zM19.8916 2.49756a6.00229 6.00229 0 01-8.36914 8.36914zM53 8.9751a4 4 0 10-4-4A4.00428 4.00428 0 0053 8.9751zm0-6a2 2 0 11-2 2A2.00229 2.00229 0 0153 2.9751z"></path><circle cx="28" cy="4.975" r="1" fill="#2a2b35"></circle><circle cx="40" cy="2.975" r="1" fill="#2a2b35"></circle><circle cx="7" cy="18.975" r="1" fill="#2a2b35"></circle><circle cx="56" cy="12.975" r="1" fill="#2a2b35"></circle><path fill="#2a2b35" d="M60,29.9751h-.03656a7.9879,7.9879,0,0,0-6.441-11.875,7.62794,7.62794,0,0,0-.30664-1.50781A7.983,7.983,0,0,0,41.16724,12.2644,6.98553,6.98553,0,0,0,29.875,13.59424a6.9912,6.9912,0,0,0-9.81122,5.4859,4.97621,4.97621,0,0,0-8.91662,4.0401A4.98418,4.98418,0,0,0,5.42249,29.9751H4a.99974.99974,0,0,0-1,1v2A29.26842,29.26842,0,0,0,18,58.55145V62.9751a.99974.99974,0,0,0,1,1H45a.99974.99974,0,0,0,1-1V58.55145A29.26842,29.26842,0,0,0,61,32.9751v-2A.99974.99974,0,0,0,60,29.9751ZM43.81152,13.20166a6.00513,6.00513,0,0,1,7.49317,3.981,5.77015,5.77015,0,0,1,.25488,1.88427,1.00221,1.00221,0,0,0,.30371.74659.98874.98874,0,0,0,.75586.27978A5.97583,5.97583,0,0,1,57.515,29.9751H49.9895l-1.71313-5.59278a.99994.99994,0,0,0-1.91211.58594l1.53363,5.00684H43.95068a11.81764,11.81764,0,0,0-3.11126-7.0918.988.988,0,0,0-.15973-.47217,6.00365,6.00365,0,0,1,3.13183-9.20947ZM16.10107,29.9751a5.00837,5.00837,0,0,1,4.89893-4c.031,0,.06049.00573.09131.00628a12.01707,12.01707,0,0,0-1.045,3.99372Zm-4.02417,0a8.85886,8.85886,0,0,1,1.5979-4.21973,8.90588,8.90588,0,0,1,9.95929-3.36877,11.75588,11.75588,0,0,0-1.45123,1.70282A6.87877,6.87877,0,0,0,21,23.9751a7.00505,7.00505,0,0,0-6.9201,6Zm11.40455-4.24658A10.00612,10.00612,0,0,1,41.95081,29.9751H22.06915A10.03007,10.03007,0,0,1,23.48145,25.72852ZM27,14.9751a4.96279,4.96279,0,0,1,2.78125.84961.99992.99992,0,0,0,1.502-.49854A4.9885,4.9885,0,0,1,39.65344,13.572,8.00815,8.00815,0,0,0,37.71527,20.426a11.95949,11.95949,0,0,0-12.27447.512,10.81361,10.81361,0,0,0-3.43543-.903C22.00507,20.01459,22,19.99554,22,19.9751A5.00588,5.00588,0,0,1,27,14.9751Zm-11,4a2.98512,2.98512,0,0,1,2.468,1.30163,11.01859,11.01859,0,0,0-5.20343,2.91156A2.98469,2.98469,0,0,1,16,18.9751Zm-9,9A2.9829,2.9829,0,0,1,11.52234,25.403a10.84241,10.84241,0,0,0-1.47315,4.57208H7.79169A2.98165,2.98165,0,0,1,7,27.9751Zm37,34H20v-3H44Zm.73285-5H19.26715a27.26257,27.26257,0,0,1-13.79547-19H42a1,1,0,0,0,0-2H5.179a27.46111,27.46111,0,0,1-.179-3v-1H49.247l.00305.00049.00323-.00049H59v1a27.46111,27.46111,0,0,1-.179,3H48a1,1,0,0,0,0,2H58.52832A27.26257,27.26257,0,0,1,44.73285,56.9751Z"></path></svg>
                </a>

                <div className={Toggle ? "nav_menu show-menu" : "nav_menu"}>
                    <ul className="nav_list">

                        <li className="nav_item">
                            <a href="#home" className="nav_link" active_link>
                                <i class="uil uil-estate nav-icon"></i> Home
                            </a>
                        </li>

                        <li className="nav_item">
                            <a href="#about" className="nav_link">
                                <i className="uil uil-user nav-icon"></i> About
                            </a>
                        </li>

                        <li className="nav_item">
                            <a href="#skills" className="nav_link">
                                <i className="uil uil-sort-amount-down nav-icon"></i> Skills
                            </a>
                        </li>

                        <li className="nav_item">
                            <a href="#portfolio" className="nav_link">
                                <i className="uil uil-diary nav-icon"></i> Portfolio
                            </a>
                        </li>

                        <li className="nav_item">
                            <a href="#contact" className="nav_link">
                                <i className="uil uil-navigator nav-icon"></i> Contact
                            </a>
                        </li>

                        {/* <li className="nav_item">
                            <a href="#tbd" className="nav_link">
                                <i className="uil uil-question-circle nav-icon"></i> TBD
                            </a>
                        </li> */}

                    </ul> 

                    <i className="uil uil-times-circle nav_close"></i>       
                </div>

                <div className="nav_toggle" onClick={() => showMenu
                (!Toggle)}>
                    <i className="uil uil-apps"></i>
                </div>
            </nav>
        </header>
    )
}

export default Header