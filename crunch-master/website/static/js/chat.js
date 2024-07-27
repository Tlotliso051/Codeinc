window.onload = function() {
var x = document.getElementById("chats").lastElementChild;
x.focus();
};

var createWorkspace = document.getElementById('createWorkspace');
var joinWorkspace = document.getElementById('joinWorkspace');
var createChannel = document.getElementById('createChannel');
var createWorkspaceModal = document.getElementById('createWorkspaceModal');
var joinWorkspaceModal = document.getElementById('joinWorkspaceModal');
var createChannelModal = document.getElementById('createChannelModal');
var blur = document.getElementById('blur');
var closeCreateWorkspace = document.getElementById('closeCreateWorkspace');
var closeJoinWorkspace = document.getElementById('closeJoinWorkspace');
var closeCreateChannel = document.getElementById('closeCreateChannel');

createWorkspace.addEventListener("click", function(){
    createWorkspaceModal.classList.toggle('createWorkspaceModalShow');
    blur.classList.toggle('bluractive');
});

createChannel.addEventListener("click", function(){
    createChannelModal.classList.toggle('createChannelModalShow');
    blur.classList.toggle('bluractive');
});

joinWorkspace.addEventListener("click", function(){
    joinWorkspaceModal.classList.toggle('joinWorkspaceModalShow');
    blur.classList.toggle('bluractive');
});

closeCreateWorkspace.addEventListener("click", function(){
    createWorkspaceModal.classList.toggle('createWorkspaceModalShow');
    blur.classList.toggle('bluractive');
});

closeJoinWorkspace.addEventListener("click", function(){
    joinWorkspaceModal.classList.toggle('joinWorkspaceModalShow');
    blur.classList.toggle('bluractive');
});

closeCreateChannel.addEventListener("click", function(){
    createChannelModal.classList.toggle('createChannelModalShow');
    blur.classList.toggle('bluractive');
});

// /*===== SCROLL REVEAL ANIMATION =====*/
// const sr = ScrollReveal({
//     origin: 'top',
//     distance: '80px',
//     duration: 2000,
//     reset: true
// })


// /*===== SCROLL REVEAL ANIMATION-CARDS =====*/
// sr.reveal('.createWorkspace', {})
// sr.reveal('.createChannel', {})
// sr.reveal('.card', {})
// sr.reveal('.chat-workspace-name', {delay: 100})
// sr.reveal('.channel-heading', {delay: 100})
// sr.reveal('.workspace', {delay: 200})
// sr.reveal('.channel', {delay: 200})
// sr.reveal('.card-body', {delay: 200})
// sr.reveal('.send-message-container', {delay: 400})


document.addEventListener('DOMContentLoaded', function () {
    const recordButton = document.getElementById('record-button');
    const stopButton = document.getElementById('stop-button');
    const audioPlayback = document.getElementById('audio-playback');

    let mediaRecorder;
    let audioChunks = [];

    // Check if browser supports MediaRecorder
    if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
        alert('getUserMedia is not supported by this browser.');
        return;
    }

    // Start recording
    recordButton.addEventListener('click', async () => {
        try {
            const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
            mediaRecorder = new MediaRecorder(stream);

            mediaRecorder.ondataavailable = event => {
                audioChunks.push(event.data);
            };

            mediaRecorder.onstop = () => {
                const audioBlob = new Blob(audioChunks, { type: 'audio/wav' });
                const audioUrl = URL.createObjectURL(audioBlob);
                audioPlayback.src = audioUrl;
                audioPlayback.style.display = 'block'; // Show the audio playback controls
                audioChunks = [];
            };

            mediaRecorder.start();
            recordButton.style.display = 'none';
            stopButton.style.display = 'block';
        } catch (error) {
            console.error('Error accessing media devices.', error);
        }
    });

    // Stop recording
    stopButton.addEventListener('click', () => {
        if (mediaRecorder) {
            mediaRecorder.stop();
            recordButton.style.display = 'block';
            stopButton.style.display = 'none';
        }
    });
});
