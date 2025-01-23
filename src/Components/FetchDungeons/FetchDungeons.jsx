import React, { useState } from "react";
import ApiFetch from "../../api/ApiFetch";
import "../../pages/home.scss";
import { Comment } from "../Comments/Comments"; 

export default function Fetchdungeons() {
    const [selecteddungeon, setSelecteddungeon] = useState(null);

    const handleClick = (dungeon) => {
        setSelecteddungeon(selecteddungeon === dungeon ? null : dungeon);
    };

    return (
        <div className="fetch-container">
            <ApiFetch url="https://zelda.fanapis.com/api/dungeons">
                {(data) => (
                    <div className="fetch-list">
                        {data
                            .filter((dungeon) => dungeon.name)
                            .map((dungeon) => (
                                <div key={dungeon.id} className="fetch-item">
                                    <div className="fetch-item-content">
                                        <p className="zelda" onClick={() => handleClick(dungeon)}>
                                          {dungeon.name}
                                        </p>
                                        {selecteddungeon === dungeon && (
                                          <>
                                            <p>{dungeon.description}</p>
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