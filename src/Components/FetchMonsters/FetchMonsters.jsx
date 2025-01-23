import React, { useState } from "react";
import ApiFetch from "../../api/ApiFetch";
import "../../pages/home.scss";
import { Comment } from "../Comments/Comments"; 

export default function Fetchmonsters() {
    const [selectedmonster, setSelectedmonster] = useState(null);

    const handleClick = (monster) => {
        setSelectedmonster(selectedmonster === monster ? null : monster);
    };

    return (
        <div className="fetch-container">
            <ApiFetch url="https://zelda.fanapis.com/api/monsters">
                {(data) => (
                    <div className="fetch-list">
                        {data
                            .filter((monster) => monster.name)
                            .map((monster) => (
                                <div key={monster.id} className="fetch-item">
                                    <div className="fetch-item-content">
                                        <p className="zelda" onClick={() => handleClick(monster)}>
                                          {monster.name}
                                        </p>
                                        {selectedmonster === monster && (
                                          <>
                                            <p>{monster.description}</p>
                                            <br></br>
                                            <Comment/>
                                          </>
                                        )}
                                    </div>
                                </div>
                            ))}
                    </div>
                )}
            </ApiFetch>
        </div>
    );
}