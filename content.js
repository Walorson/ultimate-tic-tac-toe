//Code from 2021
var settingsContent = '<h2>General Settings</h2> <p>Music Volume <input type="range" min="0" max="100" id="music-volume"><span id="music-volume-value">50</span>%</p> <p>Sound Volume <input type="range" min="0" max="100" id="sound-volume"><span id="sound-volume-value">50</span>%</p> <h2>Graphic Settings</h2> <section> <p>Shadow Quality <select id="shadowQuality"><option>Low</option><option>Medium</option><option>High</option></select></p> <p>Effects Quality <select id="effectsQuality"><option>Low</option><option>Medium</option><option>High</option></select></p> <p>Models Quality <select id="modelsQuality"><option>Low</option><option>Medium</option><option>High</option></select></p></section><section><p>Antialiasing <select id="antialiasing"><option>Off</option><option>2x</option><option>4x</option><option>8x</option></select></p><p>V-Sync <input type="checkbox" id="vsync"></p> </section> <div class="btnApply">Apply</div>';
const statsContent = '<div style="font-size:1.6rem"><h2>Stats</h2> <p>Win games: 0</p><p>Draw games: 0</p><p>Lost games: 0</p><div class="btnApply">OK</div></div>';
const singleplayerContent = `
<h2>Create Match | Player vs Bot</h2>
<h3 style="text-align:center">Choose map</h3>
<div class="maplist">
		<div class="map" onclick="saveMap(1)"><img src="img/3x3map.png" /><span class="mapname">3x3 Classic</span></div>
		<div class="map" onclick="saveMap(2)"><img src="img/4x4map.png" /><span class="mapname">4x4 Bigger</span></div>
		<div class="map" onclick="saveMap(3)"><img src="img/5x5map.png" /><span class="mapname">5x5 Big</span></div>
</div>
<div class="maplist">
			<div class="map" onclick="saveMap(4)"><img src="img/6x6map.png" /><span class="mapname">6x6 Large</span></div>
			<div class="map" onclick="saveMap(5)"><img src="img/8x8map.png" /><span class="mapname">8x8 Huge</span></div>
			<div class="map" onclick="saveMap(6)"><img src="img/trianglemap.png" /><span class="mapname">Triangle</span></div>
</div>
<div class="maplist">
				<div class="map" onclick="saveMap(7)"><img src="img/hexagonmap.png" /><span class="mapname">Hexagon</span></div>
				<div class="map" onclick="saveMap(8)"><img src="img/rectanglemap.png" /><span class="mapname">Rectangle</span></div>
				<div class="map" onclick="saveMap(9)"><img src="img/curvemap.png" /><span class="mapname">The Curve</span></div>
</div>

`;
const hotseatContent = `
<h2>Create Match | Player vs Player (hotseat)</h2>
<h3 style="text-align:center">Choose map</h3>
<div class="maplist">
		<div class="map" onclick="saveMap(1)"><img src="img/${uttt_3x3.name}.png" /><span class="mapname">3x3 Classic</span></div>
		<div class="map" onclick="saveMap(2)"><img src="img/${uttt_4x4.name}.png" /><span class="mapname">4x4 Bigger</span></div>
		<div class="map" onclick="saveMap(3)"><img src="img/${uttt_5x5.name}.png" /><span class="mapname">5x5 Big</span></div>
</div>
<div class="maplist">
			<div class="map" onclick="saveMap(4)"><img src="img/${uttt_6x6.name}.png" /><span class="mapname">6x6 Large</span></div>
			<div class="map" onclick="saveMap(5)"><img src="img/${uttt_8x8.name}.png" /><span class="mapname">8x8 Huge</span></div>
			<div class="map" onclick="saveMap(6)"><img src="img/${uttt_triangle.name}.png" /><span class="mapname">Triangle</span></div>
</div>
<div class="maplist">
				<div class="map" onclick="saveMap(7)"><img src="img/${uttt_hexagon.name}.png" /><span class="mapname">Hexagon</span></div>
				<div class="map" onclick="saveMap(8)"><img src="img/${uttt_rectangle.name}.png" /><span class="mapname">Rectangle</span></div>
				<div class="map" onclick="saveMap(9)"><img src="img/${uttt_curve.name}.png" /><span class="mapname">The Curve</span></div>
</div>

`;
const singleplayerSettingsContent = `
<h2>Match Settings</h2>
<div id="match-settings-image"></div>
<h3 style="margin-top:15px">Winning Conditions</h3>
<div class="section">
	<div class="winning-condition">
		<img src="img/straight.png" id="match-settings-img1" />
		<div style="display:flex;flex-direction:row;justify-content:space-between;align-items:center">
			<input type="checkbox" id="match-settings-checkbox1" checked />
			<select id="match-settings-select1">
				<option>3</option>
				<option>4</option>
				<option>5</option>
				<option>6</option>
				<option>7</option>
				<option>8</option>
			</select>
		</div>
	</div>
	<div class="winning-condition">
		<img src="img/cross.png" id="match-settings-img2" />
		<div style="display:flex;flex-direction:row;justify-content:space-between;align-items:center">
			<input type="checkbox" id="match-settings-checkbox2" checked />
			<select id="match-settings-select2">
				<option>3</option>
				<option>4</option>
				<option>5</option>
				<option>6</option>
				<option>7</option>
				<option>8</option>
			</select>
		</div>
	</div>
	<div class="winning-condition">
		<img src="img/custom.png" id="match-settings-img3" />
		<div style="display:flex;flex-direction:row;justify-content:space-between;align-items:center">
			<input type="checkbox" id="match-settings-checkbox3" /><span id="match-settings-custom-text">CUSTOM</span>
			<div class="add-custom-winning"><a href="#" id="customcondition-link">+</a></div>
		</div>
	</div>
</div>
<div class="kreska"></div>
<div class="match-settings-num">
	GAMEMODE:
	<select>
		<option>ONE FOR ALL</option>
		<option>TEAMS BATTLE</option>
	</select>
</div>
<div class="match-settings-num">Numbers of BOTs: <input type="number" min="1" max="3" value="1" /></div>
<div class="match-settings-num">Points to Win: <input type="number" min="1" max="50" value="3" /></div>
<div class="btnApply">CONFIRM</div>

`;
const hotseatSettingsContent = `
<h2>Match Settings</h2>
<div id="match-settings-image"></div>
<h3 style="margin-top:15px">Winning Conditions</h3>
<div class="section" id="conditions">
	<!-- <div class="winning-condition">
		<img src="img/straight.png"/>
		<div style="display:flex;flex-direction:row;justify-content:space-between;align-items:center">
			<input type="checkbox" oninput="straightLine()" checked />
			<select class="match-settings-select">
				<option>3</option>
			</select>
		</div>
	</div>
	<div class="winning-condition">
		<img src="img/cross.png"/>
		<div style="display:flex;flex-direction:row;justify-content:space-between;align-items:center">
			<input type="checkbox" oninput="crossLine()" checked />
			<select class="match-settings-select">
				<option>3</option>
			</select>
		</div>
	</div>
	
	 <div class="winning-condition">
		<img src="img/custom.png" id="match-settings-img3" />
		<div style="display:flex;flex-direction:row;justify-content:space-between;align-items:center">
			<input type="checkbox" id="match-settings-checkbox3" /><span id="match-settings-custom-text">CUSTOM</span>
			<div class="add-custom-winning"><a href="#" id="customcondition-link">+</a></div>
		</div>
	</div> -->
</div>
<div class="add-condition" onclick="addCondition()">
		+
	</div>
<div class="kreska"></div>
<!--<div class="match-settings-num">
	GAMEMODE:
	<select>
		<option>ONE FOR ALL</option>
		<option>TEAMS BATTLE</option>
	</select>
</div>
<div class="match-settings-num">Numbers of BOTs: <input type="number" min="1" max="3" value="1" /></div> -->
<div class="match-settings-num">Points to Win: <input type="number" min="1" max="50" value="3" oninput="pointsToWin()" id="pointsToWin"/></div>
<div class="btnApply" onclick="apply()">CONFIRM</div>
`;
sessionStorage.setItem("pointsToWin",3);
const loading = document.getElementById("loading");
const fadeQuit = document.getElementById("fadeQuit");

function apply() {
	conditions = conditions.purgeFromUndefined();
	sessionStorage.setItem("conditions",JSON.stringify(conditions));
	loading.showAnimated();
	
    fadeQuit.style.zIndex = 50;
    fadeQuit.style.opacity = 1;

	setTimeout(() => {
		loading.hideAnimated();
	},1000)
	setTimeout(() => {
		location.href = 'champion-select.html';
	},1250);
}
function pointsToWin() {
	sessionStorage.setItem("pointsToWin",document.getElementById("pointsToWin").value);
}