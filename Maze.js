//Team: Justin Ryland & Andrew Caruso
//Date: 1.24.2025
//Program: Maze
//Hardware: Bolt #SB-B0D0

//Start
async function startProgram() {


//Start & Say Start
//Say Start and print Start
//Driver: Andrew Caruso
//Navigator: Justin Ryland
   await speak('Start', true);
   await scrollMatrixText('START', { r: 0, g: 0, b: 255 }, 30, true);
   await roll(0, 185, 1);


//Green Checkpoint
//LED's turn Green
//Driver: Justin Ryland
//Navigator: Andrew Caruso
	await delay(50000);
	await setMainLed({ r: 0, g: 255, b: 0 });





//Sound #1 Checkpoint
//Bolt Makes Sound of Choice - Update Sound
//Driver: Andrew Caruso
//Navigator: Justin Ryland






//Red Checkpoint
//LED's turn Red
//Driver: Justin Ryland
//Navigator: Andrew Caruso





//Sound #2 Checkpoint
//Bolt Makes Sound of Choice - Update Sound
//Driver: Andrew Caruso
//Navigator: Justin Ryland




//Purple Checkpoint
//LED's turn Purple
//Driver: Justin Ryland
//Navigator: Andrew Caruso



//Sound #3 Checkpoint
//Bolt Makes Sound of Choice - Update Sound
//Driver: Andrew Caruso
//Navigator: Justin Ryland



//Blue Checkpoint
//LED's turn Blue
//Driver: Justin Ryland
//Navigator: Andrew Caruso




//Finished & say Finished
//Say Finished, and say it aloud
//Driver: Andrew Caruso
//Navigator: Justin Ryland


//End Program
}
