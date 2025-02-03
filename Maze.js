//Team: Justin Ryland & Andrew Caruso
//Date: 1.24.2025
//Program: Maze
//Hardware: Bolt #SB-B0D0

//Start
async function startProgram() {


//Start & Say Start
//Say Start and print Start
//Driver: Justin Ryland
//Navigator: Andrew
   await speak('Start', true);
   await scrollMatrixText('START', { r: 0, g: 0, b: 255 }, 30, true);
   await delay(1);
   await roll(0, 55, 2.5);


//Green Checkpoint
//LED's turn Green
//Driver: Andrew Caruso
//Navigator: Justin Ryland
	await delay(3);
	await setMainLed({ r: 0, g: 255, b: 0 });
	await roll(90, 38, 3.5);
	await delay(3);
	await roll(180, 35, 2);
	await delay(3);
	await roll(215, 40, 2);
	await delay(3);
	await roll(315, 28, 2);




//Sound #1 Checkpoint
//Bolt Makes Sound of Choice - Update Sound
//Driver: Justin Ryland
//Navigator: Andrew Caruso






//Red Checkpoint
//LED's turn Red
//Driver: Andrew Caruso
//Navigator: Justin Ryland





//Sound #2 Checkpoint
//Bolt Makes Sound of Choice - Update Sound
//Driver: Justin Ryland
//Navigator: Andrew Caruso




//Purple Checkpoint
//LED's turn Purple
//Driver: Andrew Caruso
//Navigator: justin Ryland



//Sound #3 Checkpoint
//Bolt Makes Sound of Choice - Update Sound
//Driver: Justin Ryland
//Navigator: Andrew Caruso



//Blue Checkpoint
//LED's turn Blue
//Driver: Andrew Caruso
//Navigator: Justin Caruso




//Finished & say Finished
//Say Finished, and say it aloud
//Driver: Justin Ryland
//Navigator: Andrew Caruso


//End Program
}
