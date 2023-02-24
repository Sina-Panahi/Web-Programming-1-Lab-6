// This porgram creates an emoji gallery using the data in emoji.js
const wrapper = document.querySelector('#emoji-wrapper');

// Looping the data set to process each item
emoji.forEach(emo => {
    // Create a container for each item in the data set and set its title to the current emoji code
    let emoContainer = document.createElement('div');
    emoContainer.setAttribute('title', emo['codes']);

    // Create a span element and set its textContent to the current emoji character
    let emoChar = document.createElement('span');
    emoChar.textContent = emo['char'];

    // Create another span element and set its textContent to the current emoji name
    let emoName = document.createElement('span');
    emoName.textContent = emo['name'];

    // Append the created elements into the container
    emoContainer.append(emoChar,emoName);

    // Append the emoji container into the wrapper
    wrapper.append(emoContainer);
});