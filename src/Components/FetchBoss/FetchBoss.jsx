import React, { useState } from "react";
import ApiFetch from "../../api/ApiFetch";
import "../../pages/Home.scss";
import { Comment } from "../Comments/Comments"; 

export default function FetchBoss() {
    const [selectedboss, setselectedboss] = useState(null);

    const handleClick = (boss) => {
        setselectedboss(selectedboss === boss? null : boss);
    };

    return (
        <div className="fetch-container">
            <ApiFetch url="https://zelda.fanapis.com/api/bosses">
                {(data) => (
                    <div className="fetch-list">
                        {data
                            .filter((boss) => boss.name)
                            .map((boss) => (
                                <div key={boss.id} className="fetch-item">
                                    <div className="fetch-item-content">
                                        <p className="zelda" onClick={() => handleClick(boss)}>
                                            {boss.name}
                                        </p>
                                        {selectedboss === boss&& (
                                            <>
                                                <p>{boss.description}</p>
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
