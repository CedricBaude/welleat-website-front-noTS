const baseURL = "https://testrender-6iwm.onrender.com/story";

const Story = () => {
    const [listStorys, setlistStorys] = React.useState(null);

    let x;

    React.useEffect(() => {
        axios.get(baseURL).then((response) => {
            setlistStorys(response.data);
            console.log(response.data);
        });
    }, []);

    return (
        <section className="sub-content story" id="">
            <h3 className="sub-title-2">
                La story Welleat<span className="dot">.</span>
            </h3>

            {/* <div className='line'></div> */}

            {listStorys?.data.map((data) => {
                // console.log(data.description_story);
                if (data.description_story.indexOf("Welleat") !== -1) {
                    console.log("welleat trouvé");
                    x = data.description_story.replace(
                        "Welleat",

                        <div className="story-content-2">
                            <span className="welleat">Welleat</span>
                            <span className="dot">.</span>
                        </div>
                    );
                } else {
                    console.log("welleat pas trouvé");
                    x = data.description_story;
                }

                return (
                    <div className="story-content">
                        <div className="story-content-content">
                            <div className="story-content-1 story-last">{data.nom_story}</div>
                            <div className="story-content-2">
                                {x}
                                {/* <span className="welleat">Welleat</span>
                <span className="dot">.</span> en magasin */}
                            </div>
                        </div>
                    </div>
                );
            })}
        </section>
    );
};

export default Story;