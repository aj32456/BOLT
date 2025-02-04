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
	await roll(0, 55, 2.7);


//Green Checkpoint
//LED's turn Green
//Driver: Andrew Caruso
//Navigator: Justin Ryland
	await delay(1);
	await setMainLed({ r: 0, g: 255, b: 0 });
	await roll(90, 42, 3);
	await delay(1);
	await roll(180, 35, 2);
	await delay(1);




//Sound #1 Checkpoint
//Bolt Makes Sound of Choice - Update Sound
//Driver: Justin Ryland
//Navigator: Andrew Caruso

	await Sound.Animal.Monkey.play(true);
	await delay(1);
	await roll(215, 40, 2.3);
	await delay(1);
	await roll(315, 28, 2);
    await delay(1);




//Red Checkpoint
//LED's turn Red
//Driver: Andrew Caruso
//Navigator: Justin Ryland





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
