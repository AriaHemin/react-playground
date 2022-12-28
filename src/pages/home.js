function Home (){
    return(
        <div className="flex flex-col items-center">
            <h1>welcome to my website</h1>
            <p>check out my apps: </p>
            <ul>
                <li>
                    <a href="/#/todoApp">
                        todoApp
                    </a>
                </li>
                <li>
                    <a href="/#/iwwywApp">
                        i write what you write app
                    </a>
                </li>
            </ul>

        </div>


    )
}

export default Home;
