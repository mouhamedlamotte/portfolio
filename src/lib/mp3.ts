export const playMp3 = (url: string) => {
    const audio = new Audio(url);
    audio.play();
};