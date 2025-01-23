import React, { useState } from "react";
import ApiFetch from "../../api/ApiFetch";
import "../../pages/home.scss";
import { Comment } from "../Comments/Comments"; 

export default function Fetchbosses() {
    const [selectedbosse, setSelectedbosse] = useState(null);

    const handleClick = (bosse) => {
        setSelectedbosse(selectedbosse === bosse ? null : bosse);
    };

    return (
        <div className="fetch-container">
            <ApiFetch url="https://zelda.fanapis.com/api/bosses">
                {(data) => (
                    <div className="fetch-list">
                        {data
                            .filter((bosse) => bosse.name)
                            .map((bosse) => (
                                <div key={bosse.id} className="fetch-item">
                                    <div className="fetch-item-content">
                                        <p className="zelda" onClick={() => handleClick(bosse)}>
                                          {bosse.name}
                                        </p>
                                        {selectedbosse === bosse && (
                                          <>
                                            <p>{bosse.description}</p>
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