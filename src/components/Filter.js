import React from 'react';
import * as model from '../model/model';
import { categoryHashtagsMap } from './categoryHashtagsMap'; 
import Tag from './Tag';

function Filter({ tagSelected, selectedCategory }) {
  const allTags = model.getTags();

  // Filter tags based on the selected category
  const filteredTags = selectedCategory
    ? allTags.filter((tag) => categoryHashtagsMap[selectedCategory].includes(tag))
    : allTags;


  return (
    <div>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <div style={{ display: 'flex', overflow: 'auto' }}>
          {filteredTags.map((tag, index) => {
            return <Tag key={index} tagSelected={tagSelected} value={tag} />;
          })}
        </div>
      </div>

      <div
        style={{
          display: 'flex',
          marginTop: '20px',
          flexDirection: 'row-reverse',
        }}
      ></div>
    </div>
  );
}

export default Filter;
