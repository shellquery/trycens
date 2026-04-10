// California DMV Practice Test — 500 Questions
// Languages: en | zh (Simplified) | zhTW (Traditional) | es (Spanish)
// Categories: signs | laws | rightofway | speed | dui | parking | highway | safety

export const CATEGORIES = {
  signs:      { en: 'Road Signs',        zh: '道路标志',    zhTW: '道路標誌',    es: 'Señales de Tráfico' },
  laws:       { en: 'Traffic Laws',      zh: '交通法规',    zhTW: '交通法規',    es: 'Leyes de Tráfico' },
  rightofway: { en: 'Right of Way',      zh: '优先通行权',  zhTW: '優先通行權',  es: 'Derecho de Paso' },
  speed:      { en: 'Speed Limits',      zh: '速度限制',    zhTW: '速度限制',    es: 'Límites de Velocidad' },
  dui:        { en: 'DUI & Drugs',       zh: '酒驾与毒品',  zhTW: '酒駕與毒品',  es: 'DUI y Drogas' },
  parking:    { en: 'Parking Rules',     zh: '停车规定',    zhTW: '停車規定',    es: 'Reglas de Estacionamiento' },
  highway:    { en: 'Freeway Driving',   zh: '高速公路',    zhTW: '高速公路',    es: 'Manejo en Autopista' },
  safety:     { en: 'Safety & Emergency',zh: '安全与紧急',  zhTW: '安全與緊急',  es: 'Seguridad y Emergencias' },
}

export const questions = [

// ═══════════════════════════════════════════════════════════════
//  BATCH 1 — Road Signs (Q1–10)
// ═══════════════════════════════════════════════════════════════

{
  id: 1, cat: 'signs', sign: 'stop',
  en: {
    q: 'What must you do when you come to a STOP sign?',
    opts: ['Come to a complete stop, then proceed when safe', 'Slow to 15 mph and proceed if clear', 'Stop only if other vehicles are present', 'Yield to oncoming traffic and continue'],
    exp: 'A STOP sign requires a complete stop at the stop line (or before the crosswalk/intersection if no line). After stopping, yield to all traffic and pedestrians before proceeding.'
  },
  zh: {
    q: '遇到停车标志（STOP）时，您必须怎么做？',
    opts: ['完全停车，确认安全后再行驶', '减速至15英里/小时，如无来车则通过', '仅当有其他车辆时才停车', '让行对向车辆后继续行驶'],
    exp: '停车标志要求您在停止线处（或路口/人行横道前）完全停车。停车后，确认让行所有车辆和行人，再继续行驶。'
  },
  zhTW: {
    q: '遇到停車標誌（STOP）時，您必須怎麼做？',
    opts: ['完全停車，確認安全後再行駛', '減速至15英里/小時，如無來車則通過', '僅當有其他車輛時才停車', '讓行對向車輛後繼續行駛'],
    exp: '停車標誌要求您在停止線處（或路口/人行橫道前）完全停車。停車後，確認讓行所有車輛和行人，再繼續行駛。'
  },
  es: {
    q: '¿Qué debe hacer cuando llega a una señal de STOP (Alto)?',
    opts: ['Detenerse completamente, luego avanzar cuando sea seguro', 'Reducir a 15 mph y continuar si está despejado', 'Detenerse solo si hay otros vehículos presentes', 'Ceder el paso al tráfico y continuar'],
    exp: 'Una señal de STOP requiere una parada completa en la línea de parada (o antes del cruce peatonal/intersección). Después de detenerse, ceda el paso a todo el tráfico y peatones antes de continuar.'
  },
  ans: 0
},

{
  id: 2, cat: 'signs', sign: 'yield',
  en: {
    q: 'What does a YIELD sign require you to do?',
    opts: ['Slow down and give the right of way to cross traffic', 'Stop completely before proceeding', 'Speed up to merge with traffic', 'Proceed without slowing if no cars are visible'],
    exp: 'A YIELD sign means you must slow down and give the right of way to vehicles and pedestrians in or approaching the intersection. Stop if necessary, but a complete stop is not always required.'
  },
  zh: {
    q: '让行标志（YIELD）要求您做什么？',
    opts: ['减速，将优先权让给交叉路口的车辆', '完全停车后再通过', '加速并入交通流', '如看不到车辆可不减速通过'],
    exp: '让行标志意味着您必须减速，将优先通行权让给路口内或正在靠近路口的车辆和行人。必要时须停车，但并非总是要求完全停车。'
  },
  zhTW: {
    q: '讓行標誌（YIELD）要求您做什麼？',
    opts: ['減速，將優先權讓給交叉路口的車輛', '完全停車後再通過', '加速並入交通流', '如看不到車輛可不減速通過'],
    exp: '讓行標誌意味著您必須減速，將優先通行權讓給路口內或正在靠近路口的車輛和行人。必要時須停車，但並非總是要求完全停車。'
  },
  es: {
    q: '¿Qué le exige hacer una señal de CEDA EL PASO (YIELD)?',
    opts: ['Reducir la velocidad y dar el derecho de paso al tráfico cruzado', 'Detenerse completamente antes de continuar', 'Acelerar para fusionarse con el tráfico', 'Continuar sin reducir si no hay autos visibles'],
    exp: 'Una señal de CEDA EL PASO significa que debe reducir la velocidad y dar el derecho de paso a los vehículos y peatones en la intersección. Deténgase si es necesario, pero no siempre se requiere una parada completa.'
  },
  ans: 0
},

{
  id: 3, cat: 'signs', sign: 'do-not-enter',
  en: {
    q: 'What does a DO NOT ENTER sign mean?',
    opts: ['You are going the wrong way — do not enter', 'Road construction ahead — slow down', 'No parking beyond this point', 'Pedestrian crossing only'],
    exp: 'A DO NOT ENTER sign (red circle with white horizontal bar) means you must not proceed in that direction. It is typically posted at one-way street exits and freeway off-ramps to prevent wrong-way driving.'
  },
  zh: {
    q: '禁止进入标志（DO NOT ENTER）是什么意思？',
    opts: ['您走错方向了——禁止进入', '前方施工——减速', '此处起禁止停车', '仅供行人通行'],
    exp: '禁止进入标志（红圆圈内有白色横条）表示您不得沿该方向行驶。通常设置在单行道出口和高速公路匝道处，防止逆行。'
  },
  zhTW: {
    q: '禁止進入標誌（DO NOT ENTER）是什麼意思？',
    opts: ['您走錯方向了——禁止進入', '前方施工——減速', '此處起禁止停車', '僅供行人通行'],
    exp: '禁止進入標誌（紅圓圈內有白色橫條）表示您不得沿該方向行駛。通常設置在單行道出口和高速公路匝道處，防止逆行。'
  },
  es: {
    q: '¿Qué significa una señal de NO ENTRE (DO NOT ENTER)?',
    opts: ['Va en dirección equivocada — no entre', 'Construcción adelante — reduzca la velocidad', 'No estacionar más allá de este punto', 'Solo cruce peatonal'],
    exp: 'Una señal de NO ENTRE (círculo rojo con barra horizontal blanca) significa que no debe continuar en esa dirección. Generalmente se coloca en salidas de calles de un sentido y rampas de salida de autopistas para evitar conducir en sentido contrario.'
  },
  ans: 0
},

{
  id: 4, cat: 'signs', sign: 'wrong-way',
  en: {
    q: 'You see a WRONG WAY sign. What should you do?',
    opts: ['Pull over safely and turn around or back out', 'Continue driving — the sign is for other drivers', 'Speed up to clear the area quickly', 'Flash your headlights to warn oncoming traffic'],
    exp: 'A WRONG WAY sign means you have entered a roadway going in the wrong direction. You must pull off the road safely, stop, and then return to the correct direction. Never continue in the wrong direction.'
  },
  zh: {
    q: '您看到"错误方向"（WRONG WAY）标志。您该怎么做？',
    opts: ['安全靠边停车，然后掉头或倒车离开', '继续行驶——该标志是给其他司机看的', '加速快速通过该区域', '闪灯警告对面来车'],
    exp: '"错误方向"标志表示您正在以错误方向行驶进入道路。您必须安全驶离道路、停车，然后返回正确方向行驶。切勿继续逆行。'
  },
  zhTW: {
    q: '您看到「錯誤方向」（WRONG WAY）標誌。您該怎麼做？',
    opts: ['安全靠邊停車，然後掉頭或倒車離開', '繼續行駛——該標誌是給其他司機看的', '加速快速通過該區域', '閃燈警告對面來車'],
    exp: '「錯誤方向」標誌表示您正在以錯誤方向行駛進入道路。您必須安全駛離道路、停車，然後返回正確方向行駛。切勿繼續逆行。'
  },
  es: {
    q: 'Ve una señal de DIRECCIÓN INCORRECTA (WRONG WAY). ¿Qué debe hacer?',
    opts: ['Orillarse con seguridad y dar vuelta o retroceder', 'Continuar — la señal es para otros conductores', 'Acelerar para salir del área rápidamente', 'Hacer destellos de luz para advertir al tráfico que viene'],
    exp: 'Una señal de DIRECCIÓN INCORRECTA significa que entró a una vía en la dirección equivocada. Debe orillarse de forma segura, detenerse y luego regresar a la dirección correcta. Nunca continúe en la dirección incorrecta.'
  },
  ans: 0
},

{
  id: 5, cat: 'signs', sign: 'speed-25',
  en: {
    q: 'Where is a 25 mph speed limit most commonly posted?',
    opts: ['Residential areas and business districts', 'Open highways and freeways', 'School zones during school hours', 'Alleys and narrow lanes'],
    exp: 'In California, the prima facie (default) speed limit is 25 mph in residential districts and business districts. It is also 25 mph on roads near schools when children are present (though active school zones post 25 mph signs).'
  },
  zh: {
    q: '25英里/小时的限速标志最常见于哪里？',
    opts: ['住宅区和商业区', '开放公路和高速公路', '上学时间的学区', '小巷和狭窄道路'],
    exp: '在加州，住宅区和商业区的法定（默认）限速为25英里/小时。当儿童在场时，学校附近道路的限速也是25英里/小时。'
  },
  zhTW: {
    q: '25英里/小時的限速標誌最常見於哪裡？',
    opts: ['住宅區和商業區', '開放公路和高速公路', '上學時間的學區', '小巷和狹窄道路'],
    exp: '在加州，住宅區和商業區的法定（預設）限速為25英里/小時。當兒童在場時，學校附近道路的限速也是25英里/小時。'
  },
  es: {
    q: '¿Dónde se publica más comúnmente un límite de velocidad de 25 mph?',
    opts: ['Zonas residenciales y distritos comerciales', 'Carreteras abiertas y autopistas', 'Zonas escolares durante horas escolares', 'Callejones y carriles estrechos'],
    exp: 'En California, el límite de velocidad prima facie (predeterminado) es de 25 mph en zonas residenciales y distritos comerciales. También es de 25 mph en carreteras cerca de escuelas cuando hay niños presentes.'
  },
  ans: 0
},

{
  id: 6, cat: 'signs', sign: 'ped-crossing',
  en: {
    q: 'This yellow diamond sign with a walking figure means:',
    opts: ['Pedestrian crossing area ahead — slow down and watch for walkers', 'School zone — stop for children', 'No pedestrians allowed beyond this point', 'Crosswalk ends here'],
    exp: 'The yellow diamond pedestrian crossing sign warns drivers that a pedestrian crossing is ahead. Slow down and be prepared to stop for pedestrians. This is a warning sign, not a regulatory sign.'
  },
  zh: {
    q: '这个带行人图案的黄色菱形标志表示：',
    opts: ['前方有行人穿越区——减速注意行人', '学区——停车让儿童通过', '此处起禁止行人通行', '人行横道在此结束'],
    exp: '黄色菱形行人穿越警告标志提醒驾驶员前方有人行横道。请减速并准备为行人停车。这是警告标志，不是规定性标志。'
  },
  zhTW: {
    q: '這個帶行人圖案的黃色菱形標誌表示：',
    opts: ['前方有行人穿越區——減速注意行人', '學區——停車讓兒童通過', '此處起禁止行人通行', '人行橫道在此結束'],
    exp: '黃色菱形行人穿越警告標誌提醒駕駛員前方有人行橫道。請減速並準備為行人停車。這是警告標誌，不是規定性標誌。'
  },
  es: {
    q: 'Esta señal de diamante amarillo con una figura caminando significa:',
    opts: ['Área de cruce peatonal adelante — reduzca velocidad y esté atento', 'Zona escolar — deténgase por los niños', 'No se permiten peatones más allá de este punto', 'El cruce peatonal termina aquí'],
    exp: 'La señal de advertencia de cruce peatonal en diamante amarillo avisa a los conductores que hay un cruce peatonal adelante. Reduzca la velocidad y esté preparado para detenerse por los peatones.'
  },
  ans: 0
},

{
  id: 7, cat: 'signs', sign: 'school',
  en: {
    q: 'What does the pentagon-shaped yellow sign with children figures mean?',
    opts: ['School zone — 25 mph when children are present', 'Playground area — slow to 15 mph at all times', 'Caution: children may be crossing', 'School bus stop ahead'],
    exp: 'The pentagon-shaped yellow/fluorescent school sign marks a school zone. The speed limit is 25 mph when children are present or when the school flashing beacon is active. Fines are doubled in school zones.'
  },
  zh: {
    q: '带儿童图案的五边形黄色标志表示什么？',
    opts: ['学区——有儿童时限速25英里/小时', '游乐场区域——始终限速15英里/小时', '注意：可能有儿童穿越', '前方有校车停靠站'],
    exp: '五边形黄色（荧光色）学校标志标示学区范围。当有儿童在场或学校闪灯信号亮起时，限速为25英里/小时。学区内违规罚款加倍。'
  },
  zhTW: {
    q: '帶兒童圖案的五邊形黃色標誌表示什麼？',
    opts: ['學區——有兒童時限速25英里/小時', '遊樂場區域——始終限速15英里/小時', '注意：可能有兒童穿越', '前方有校車停靠站'],
    exp: '五邊形黃色（螢光色）學校標誌標示學區範圍。當有兒童在場或學校閃燈信號亮起時，限速為25英里/小時。學區內違規罰款加倍。'
  },
  es: {
    q: '¿Qué significa la señal amarilla pentagonal con figuras de niños?',
    opts: ['Zona escolar — 25 mph cuando hay niños presentes', 'Área de juegos — siempre 15 mph', 'Precaución: puede haber niños cruzando', 'Parada de autobús escolar adelante'],
    exp: 'La señal escolar pentagonal amarilla/fluorescente marca una zona escolar. El límite de velocidad es 25 mph cuando hay niños presentes o cuando el faro parpadeante escolar está activo. Las multas se duplican en zonas escolares.'
  },
  ans: 0
},

{
  id: 8, cat: 'signs', sign: 'railroad-advance',
  en: {
    q: 'This round yellow sign with an X means:',
    opts: ['Railroad crossing ahead — slow down and be prepared to stop', 'No entry to railroad property', 'Train tracks have been removed', 'Cross railroad tracks at full speed'],
    exp: 'The round yellow advance warning sign for a railroad crossing alerts drivers that tracks are ahead. Slow down, look and listen for trains, and be prepared to stop. Never stop on railroad tracks.'
  },
  zh: {
    q: '这个带X图案的圆形黄色标志表示：',
    opts: ['前方铁路道口——减速并准备停车', '禁止进入铁路用地', '铁轨已被移除', '以全速穿越铁轨'],
    exp: '铁路道口圆形黄色预警标志提醒驾驶员前方有铁轨。请减速，注意观察和倾听火车，并准备停车。切勿在铁轨上停车。'
  },
  zhTW: {
    q: '這個帶X圖案的圓形黃色標誌表示：',
    opts: ['前方鐵路道口——減速並準備停車', '禁止進入鐵路用地', '鐵軌已被移除', '以全速穿越鐵軌'],
    exp: '鐵路道口圓形黃色預警標誌提醒駕駛員前方有鐵軌。請減速，注意觀察和傾聽火車，並準備停車。切勿在鐵軌上停車。'
  },
  es: {
    q: 'Esta señal redonda amarilla con una X significa:',
    opts: ['Cruce ferroviario adelante — reduzca velocidad y esté preparado para detenerse', 'No entrada a propiedad ferroviaria', 'Las vías del tren han sido removidas', 'Cruce las vías a velocidad normal'],
    exp: 'La señal de advertencia redonda amarilla para cruce ferroviario alerta a los conductores que hay vías adelante. Reduzca la velocidad, mire y escuche trenes, y esté preparado para detenerse. Nunca se detenga sobre las vías del tren.'
  },
  ans: 0
},

{
  id: 9, cat: 'signs', sign: 'curve-right',
  en: {
    q: 'A yellow diamond sign with a curved arrow pointing right means:',
    opts: ['The road curves to the right ahead — adjust your speed', 'Turn right is required at the next intersection', 'Right lane ends — merge left', 'No left turns allowed'],
    exp: 'A yellow diamond sign with a curved arrow is a warning sign indicating the road ahead curves in the direction shown. Reduce your speed before entering the curve — it is dangerous to brake while in a curve.'
  },
  zh: {
    q: '带有向右弯曲箭头的黄色菱形标志表示：',
    opts: ['前方道路向右弯曲——调整速度', '下一个路口须右转', '右车道结束——向左并道', '禁止左转'],
    exp: '带有弯曲箭头的黄色菱形标志是警告标志，提示前方道路向箭头所示方向弯曲。进入弯道前应减速——在弯道中急刹车非常危险。'
  },
  zhTW: {
    q: '帶有向右彎曲箭頭的黃色菱形標誌表示：',
    opts: ['前方道路向右彎曲——調整速度', '下一個路口須右轉', '右車道結束——向左並道', '禁止左轉'],
    exp: '帶有彎曲箭頭的黃色菱形標誌是警告標誌，提示前方道路向箭頭所示方向彎曲。進入彎道前應減速——在彎道中急剎車非常危險。'
  },
  es: {
    q: 'Una señal de diamante amarillo con una flecha curva apuntando a la derecha significa:',
    opts: ['La carretera curva hacia la derecha adelante — ajuste su velocidad', 'Se requiere girar a la derecha en la próxima intersección', 'El carril derecho termina — fusiónese a la izquierda', 'No se permiten giros a la izquierda'],
    exp: 'Una señal de diamante amarillo con una flecha curva es una señal de advertencia que indica que la carretera adelante curva en la dirección mostrada. Reduzca la velocidad antes de entrar a la curva — es peligroso frenar dentro de una curva.'
  },
  ans: 0
},

{
  id: 10, cat: 'signs', sign: 'construction',
  en: {
    q: 'What does an orange diamond-shaped sign indicate?',
    opts: ['Construction or work zone — slow down, workers present', 'Warning of a dangerous curve ahead', 'School zone is active', 'Detour route in this direction'],
    exp: 'Orange diamond signs are used in construction and maintenance zones. They warn of road workers, reduced lanes, detours, and changed traffic patterns. Speed limits are reduced in work zones and fines are doubled for violations.'
  },
  zh: {
    q: '橙色菱形标志表示什么？',
    opts: ['施工或作业区——减速，有工人在场', '前方有危险弯道的警告', '学区正在运作', '沿此方向绕行'],
    exp: '橙色菱形标志用于施工和维护区域，警告前方有道路工人、车道减少、绕行路线及交通模式变化。施工区限速降低，违规罚款加倍。'
  },
  zhTW: {
    q: '橙色菱形標誌表示什麼？',
    opts: ['施工或作業區——減速，有工人在場', '前方有危險彎道的警告', '學區正在運作', '沿此方向繞行'],
    exp: '橙色菱形標誌用於施工和維護區域，警告前方有道路工人、車道減少、繞行路線及交通模式變化。施工區限速降低，違規罰款加倍。'
  },
  es: {
    q: '¿Qué indica una señal de diamante naranja?',
    opts: ['Zona de construcción o trabajo — reduzca velocidad, hay trabajadores', 'Advertencia de curva peligrosa adelante', 'La zona escolar está activa', 'Ruta de desvío en esta dirección'],
    exp: 'Las señales de diamante naranja se usan en zonas de construcción y mantenimiento. Advierten sobre trabajadores viales, carriles reducidos, desvíos y patrones de tráfico cambiados. Los límites de velocidad se reducen y las multas se duplican en zonas de trabajo.'
  },
  ans: 0
},


// ═══════════════════════════════════════════════════════════════
//  BATCH 2 — Road Signs (Q11–20)
// ═══════════════════════════════════════════════════════════════

{
  id: 11, cat: 'signs', sign: 'no-u-turn',
  en: {
    q: 'This sign with a U-turn arrow crossed out means:',
    opts: ['U-turns are prohibited at this location', 'U-turns are permitted here', 'Left turns only at this intersection', 'No reversing in this lane'],
    exp: 'The No U-Turn sign prohibits making a U-turn at that location. U-turns are also illegal in California at intersections where a traffic officer is directing traffic, in front of a fire station, and wherever a sign prohibits them.'
  },
  zh: {
    q: '这个带有被划掉的U形转弯箭头的标志表示：',
    opts: ['此处禁止掉头', '此处允许掉头', '该路口仅可左转', '此车道禁止倒车'],
    exp: '禁止掉头标志禁止在该位置掉头。在加州，以下地点的掉头也是违法的：交警指挥交通的路口、消防站前方，以及任何有禁止掉头标志的地点。'
  },
  zhTW: {
    q: '這個帶有被劃掉的U形轉彎箭頭的標誌表示：',
    opts: ['此處禁止掉頭', '此處允許掉頭', '該路口僅可左轉', '此車道禁止倒車'],
    exp: '禁止掉頭標誌禁止在該位置掉頭。在加州，以下地點的掉頭也是違法的：交警指揮交通的路口、消防站前方，以及任何有禁止掉頭標誌的地點。'
  },
  es: {
    q: 'Esta señal con una flecha de retorno en U tachada significa:',
    opts: ['Los giros en U están prohibidos en esta ubicación', 'Los giros en U están permitidos aquí', 'Solo giros a la izquierda en esta intersección', 'No dar marcha atrás en este carril'],
    exp: 'La señal de No dar Vuelta en U prohíbe hacer un giro en U en ese lugar. Los giros en U también son ilegales en California en intersecciones donde un oficial dirige el tráfico, frente a estaciones de bomberos y donde una señal lo prohíba.'
  },
  ans: 0
},

{
  id: 12, cat: 'signs', sign: 'slippery',
  en: {
    q: 'The yellow diamond sign with a skidding car means:',
    opts: ['Slippery when wet — reduce speed and increase following distance', 'Ice on road — stop and wait', 'Car wash ahead', 'Road flooding possible'],
    exp: 'The Slippery When Wet sign warns that the road surface becomes especially slippery in wet conditions. Reduce your speed, avoid sudden braking or sharp turns, and increase your following distance when you see this sign.'
  },
  zh: {
    q: '带有打滑汽车图案的黄色菱形标志表示：',
    opts: ['潮湿时路面湿滑——减速并增大跟车距离', '路面结冰——停车等待', '前方有洗车店', '可能发生道路积水'],
    exp: '路面湿滑警告标志提醒驾驶员，该路段在潮湿条件下会变得特别湿滑。看到此标志时，请减速行驶，避免急刹车或急转弯，并增大与前车的距离。'
  },
  zhTW: {
    q: '帶有打滑汽車圖案的黃色菱形標誌表示：',
    opts: ['潮濕時路面濕滑——減速並增大跟車距離', '路面結冰——停車等待', '前方有洗車店', '可能發生道路積水'],
    exp: '路面濕滑警告標誌提醒駕駛員，該路段在潮濕條件下會變得特別濕滑。看到此標誌時，請減速行駛，避免急剎車或急轉彎，並增大與前車的距離。'
  },
  es: {
    q: 'La señal de diamante amarillo con un auto patinando significa:',
    opts: ['Resbaladizo cuando está mojado — reduzca velocidad y aumente distancia', 'Hielo en la carretera — deténgase y espere', 'Lavado de autos adelante', 'Posible inundación de la carretera'],
    exp: 'La señal de Resbaladizo Cuando Está Mojado advierte que la superficie de la carretera se vuelve especialmente resbaladiza en condiciones húmedas. Reduzca la velocidad, evite frenadas bruscas o giros cerrados y aumente su distancia de seguimiento.'
  },
  ans: 0
},

{
  id: 13, cat: 'signs', sign: 'merge',
  en: {
    q: 'A yellow diamond sign showing two lanes joining into one means:',
    opts: ['Lanes are merging ahead — prepare to adjust position', 'No passing zone begins', 'Road widens ahead', 'Stay in your current lane at all times'],
    exp: 'The Merge sign warns that two lanes of traffic will merge into one. Drivers should adjust speed and position to allow for safe merging. The vehicle in the continuing lane generally has the right of way.'
  },
  zh: {
    q: '显示两条车道合并成一条的黄色菱形标志表示：',
    opts: ['前方车道合并——做好准备调整位置', '禁止超车区域开始', '前方道路变宽', '始终保持在当前车道'],
    exp: '合并标志警告驾驶员前方两条行车道将合并为一条。驾驶员应调整速度和位置，以便安全并入。通常情况下，继续行驶车道上的车辆具有优先通行权。'
  },
  zhTW: {
    q: '顯示兩條車道合併成一條的黃色菱形標誌表示：',
    opts: ['前方車道合併——做好準備調整位置', '禁止超車區域開始', '前方道路變寬', '始終保持在當前車道'],
    exp: '合併標誌警告駕駛員前方兩條行車道將合併為一條。駕駛員應調整速度和位置，以便安全並入。通常情況下，繼續行駛車道上的車輛具有優先通行權。'
  },
  es: {
    q: 'Una señal de diamante amarillo que muestra dos carriles uniéndose en uno significa:',
    opts: ['Los carriles se fusionan adelante — prepárese para ajustar su posición', 'Comienza zona de no adelantar', 'La carretera se amplía adelante', 'Permanezca en su carril actual en todo momento'],
    exp: 'La señal de Fusión advierte que dos carriles de tráfico se fusionarán en uno. Los conductores deben ajustar la velocidad y posición para permitir una fusión segura. El vehículo en el carril que continúa generalmente tiene el derecho de paso.'
  },
  ans: 0
},

{
  id: 14, cat: 'signs', sign: 'divided-begins',
  en: {
    q: 'A sign showing one road splitting into two with a barrier between them means:',
    opts: ['Divided highway begins — keep right of the divider', 'Road narrows to one lane', 'Highway ends — reduce speed', 'Two-way traffic begins'],
    exp: 'The Divided Highway Begins sign warns that the road ahead is divided by a median or barrier. You must stay to the right of the divider. Oncoming traffic will be separated from you.'
  },
  zh: {
    q: '显示一条道路分成两条且中间有隔离带的标志表示：',
    opts: ['分隔公路开始——靠隔离带右侧行驶', '道路收窄为单车道', '高速公路结束——减速', '双向交通开始'],
    exp: '分隔公路开始标志警告驾驶员前方道路被中央分隔带或护栏分成两部分。您必须在分隔带右侧行驶，对向来车将与您分开。'
  },
  zhTW: {
    q: '顯示一條道路分成兩條且中間有隔離帶的標誌表示：',
    opts: ['分隔公路開始——靠隔離帶右側行駛', '道路收窄為單車道', '高速公路結束——減速', '雙向交通開始'],
    exp: '分隔公路開始標誌警告駕駛員前方道路被中央分隔帶或護欄分成兩部分。您必須在分隔帶右側行駛，對向來車將與您分開。'
  },
  es: {
    q: 'Una señal que muestra una carretera dividiéndose en dos con una barrera entre ellas significa:',
    opts: ['Comienza autopista dividida — manténgase a la derecha del divisor', 'La carretera se estrecha a un carril', 'Termina la autopista — reduzca la velocidad', 'Comienza tráfico en dos sentidos'],
    exp: 'La señal de Inicio de Autopista Dividida advierte que la carretera adelante está dividida por una mediana o barrera. Debe mantenerse a la derecha del divisor. El tráfico en sentido contrario estará separado de usted.'
  },
  ans: 0
},

{
  id: 15, cat: 'signs', sign: 'divided-ends',
  en: {
    q: 'A sign showing two roads merging into one without a barrier means:',
    opts: ['Divided highway ends — watch for two-way traffic ahead', 'Merge left — right lane closing', 'Road narrows at bridge', 'End of one-way road'],
    exp: 'The Divided Highway Ends sign warns that the divided road ahead will become a two-way road without a median barrier. Be alert for oncoming traffic as you will be sharing the roadway.'
  },
  zh: {
    q: '显示两条道路合并为一条且没有隔离带的标志表示：',
    opts: ['分隔公路结束——注意前方双向交通', '向左合并——右车道关闭', '桥前道路变窄', '单行道结束'],
    exp: '分隔公路结束标志警告驾驶员，前方分隔道路将变为无中央护栏的双向道路。请注意对向来车，因为您将与对向车辆共用道路。'
  },
  zhTW: {
    q: '顯示兩條道路合併為一條且沒有隔離帶的標誌表示：',
    opts: ['分隔公路結束——注意前方雙向交通', '向左合併——右車道關閉', '橋前道路變窄', '單行道結束'],
    exp: '分隔公路結束標誌警告駕駛員，前方分隔道路將變為無中央護欄的雙向道路。請注意對向來車，因為您將與對向車輛共用道路。'
  },
  es: {
    q: 'Una señal que muestra dos carreteras fusionándose en una sin barrera significa:',
    opts: ['Termina la autopista dividida — cuidado con el tráfico en dos sentidos adelante', 'Fusiónese a la izquierda — cierra el carril derecho', 'La carretera se estrecha en el puente', 'Fin de carretera de un solo sentido'],
    exp: 'La señal de Fin de Autopista Dividida advierte que la carretera dividida se convertirá en una carretera de dos sentidos sin barrera mediana. Esté alerta al tráfico en sentido contrario ya que compartirá la calzada.'
  },
  ans: 0
},

{
  id: 16, cat: 'signs', sign: 'signal-ahead',
  en: {
    q: 'A yellow diamond sign with a traffic light image means:',
    opts: ['Traffic signal ahead — be prepared to stop', 'Signal is out of order — treat as 4-way stop', 'Green light only — do not slow down', 'Pedestrian signal crossing ahead'],
    exp: 'The Traffic Signal Ahead warning sign alerts drivers that a traffic signal is coming up. You should reduce speed and be prepared to stop. This sign is placed before signals that may not be immediately visible.'
  },
  zh: {
    q: '带有红绿灯图案的黄色菱形标志表示：',
    opts: ['前方有交通信号灯——准备停车', '信号灯故障——按四路停车处理', '仅限绿灯——不必减速', '前方有行人信号穿越'],
    exp: '交通信号灯预警标志提醒驾驶员前方有信号灯。您应减速并准备停车。该标志通常设置在不易直接看见信号灯的位置前方。'
  },
  zhTW: {
    q: '帶有紅綠燈圖案的黃色菱形標誌表示：',
    opts: ['前方有交通信號燈——準備停車', '信號燈故障——按四路停車處理', '僅限綠燈——不必減速', '前方有行人信號穿越'],
    exp: '交通信號燈預警標誌提醒駕駛員前方有信號燈。您應減速並準備停車。該標誌通常設置在不易直接看見信號燈的位置前方。'
  },
  es: {
    q: 'Una señal de diamante amarillo con imagen de semáforo significa:',
    opts: ['Semáforo adelante — prepárese para detenerse', 'La señal está fuera de servicio — trátelo como alto de 4 vías', 'Solo luz verde — no reduzca la velocidad', 'Cruce peatonal con señal adelante'],
    exp: 'La señal de advertencia de Semáforo Adelante alerta a los conductores que hay un semáforo próximo. Debe reducir la velocidad y estar preparado para detenerse. Esta señal se coloca antes de semáforos que pueden no ser inmediatamente visibles.'
  },
  ans: 0
},

{
  id: 17, cat: 'signs', sign: 'deer',
  en: {
    q: 'A yellow diamond sign with a deer silhouette means:',
    opts: ['Wildlife crossing area — watch for animals on the road', 'Hunting allowed beyond this point', 'Animal sanctuary — no vehicles', 'Zoo entrance ahead'],
    exp: 'The Deer Crossing sign warns drivers that deer and other wildlife frequently cross the road in that area. Be especially alert at dawn and dusk when animals are most active. Reduce speed and watch for animals on or near the road.'
  },
  zh: {
    q: '带有鹿剪影的黄色菱形标志表示：',
    opts: ['野生动物穿越区——注意路上的动物', '此处起允许狩猎', '动物保护区——禁止车辆进入', '前方动物园入口'],
    exp: '鹿穿越标志警告驾驶员该区域经常有鹿等野生动物横穿道路。在黎明和黄昏时应特别警惕，因为动物在此时段最为活跃。请减速并注意路上或路边的动物。'
  },
  zhTW: {
    q: '帶有鹿剪影的黃色菱形標誌表示：',
    opts: ['野生動物穿越區——注意路上的動物', '此處起允許狩獵', '動物保護區——禁止車輛進入', '前方動物園入口'],
    exp: '鹿穿越標誌警告駕駛員該區域經常有鹿等野生動物橫穿道路。在黎明和黃昏時應特別警惕，因為動物在此時段最為活躍。請減速並注意路上或路邊的動物。'
  },
  es: {
    q: 'Una señal de diamante amarillo con la silueta de un venado significa:',
    opts: ['Área de cruce de vida silvestre — esté atento a animales en la carretera', 'Cacería permitida más allá de este punto', 'Santuario de animales — sin vehículos', 'Entrada al zoológico adelante'],
    exp: 'La señal de Cruce de Venados advierte a los conductores que los venados y otros animales silvestres frecuentemente cruzan la carretera en esa área. Esté especialmente alerta al amanecer y al atardecer cuando los animales son más activos.'
  },
  ans: 0
},

{
  id: 18, cat: 'signs', sign: 'no-passing',
  en: {
    q: 'A triangular yellow pennant sign on the left side of the road means:',
    opts: ['No passing zone — do not attempt to pass other vehicles', 'One-way road begins', 'Left lane closed ahead', 'Yield to traffic from left'],
    exp: 'The pennant-shaped No Passing Zone sign is placed on the left side of the road to mark where passing is prohibited. It is used along with a solid yellow center line. Never pass in no-passing zones — it is extremely dangerous.'
  },
  zh: {
    q: '道路左侧的三角形黄色旗帜形状标志表示：',
    opts: ['禁止超车区——不得尝试超越其他车辆', '单行道开始', '前方左车道关闭', '让左方来车先行'],
    exp: '旗帜形状的禁止超车区标志设置在道路左侧，标示禁止超车的路段。它与实线黄色中心线配合使用。切勿在禁止超车区超车——这极其危险。'
  },
  zhTW: {
    q: '道路左側的三角形黃色旗幟形狀標誌表示：',
    opts: ['禁止超車區——不得嘗試超越其他車輛', '單行道開始', '前方左車道關閉', '讓左方來車先行'],
    exp: '旗幟形狀的禁止超車區標誌設置在道路左側，標示禁止超車的路段。它與實線黃色中心線配合使用。切勿在禁止超車區超車——這極其危險。'
  },
  es: {
    q: 'Una señal triangular amarilla en forma de banderín en el lado izquierdo de la carretera significa:',
    opts: ['Zona de no adelantar — no intente pasar a otros vehículos', 'Comienza carretera de un sentido', 'Carril izquierdo cerrado adelante', 'Ceda el paso al tráfico de la izquierda'],
    exp: 'La señal en forma de banderín de Zona de No Adelantar se coloca en el lado izquierdo de la carretera para marcar dónde está prohibido adelantar. Se usa junto con una línea central amarilla sólida. Nunca adelante en zonas de no adelantar.'
  },
  ans: 0
},

{
  id: 19, cat: 'signs', sign: 'four-way-stop',
  en: {
    q: 'A STOP sign with a plate below it reading "4-WAY" or "ALL WAY" means:',
    opts: ['All traffic from every direction must stop', 'Only cross traffic must stop — you have the right of way', 'Stop and then drive at 4 mph maximum', 'Four vehicles may proceed at the same time'],
    exp: 'At a four-way (all-way) stop, all approaching vehicles from all directions must stop. Then, vehicles proceed in the order they stopped. If two vehicles arrive simultaneously, the vehicle on the right goes first.'
  },
  zh: {
    q: '停车标志下方有"4-WAY"或"ALL WAY"铭牌，表示：',
    opts: ['所有方向的车辆均须停车', '仅横向来车须停车——您有优先通行权', '停车后以最高4英里/小时行驶', '四辆车可同时通过'],
    exp: '在四路（全路）停车路口，所有方向的来车均须停车。然后，按停车先后顺序依次通行。若两辆车同时到达，右方车辆先行。'
  },
  zhTW: {
    q: '停車標誌下方有「4-WAY」或「ALL WAY」銘牌，表示：',
    opts: ['所有方向的車輛均須停車', '僅橫向來車須停車——您有優先通行權', '停車後以最高4英里/小時行駛', '四輛車可同時通過'],
    exp: '在四路（全路）停車路口，所有方向的來車均須停車。然後，按停車先後順序依次通行。若兩輛車同時到達，右方車輛先行。'
  },
  es: {
    q: 'Una señal de STOP con una placa debajo que dice "4-WAY" o "ALL WAY" significa:',
    opts: ['Todo el tráfico de todas las direcciones debe detenerse', 'Solo el tráfico cruzado debe detenerse — usted tiene el derecho de paso', 'Deténgase y luego conduzca a un máximo de 4 mph', 'Cuatro vehículos pueden continuar al mismo tiempo'],
    exp: 'En un alto de cuatro vías (todas las vías), todos los vehículos que se aproximan desde todas las direcciones deben detenerse. Luego, los vehículos avanzan en el orden en que se detuvieron. Si dos llegan simultáneamente, el de la derecha va primero.'
  },
  ans: 0
},

{
  id: 20, cat: 'signs', sign: 'roundabout',
  en: {
    q: 'A yellow diamond sign with a circular arrow indicates:',
    opts: ['Roundabout (traffic circle) ahead — yield to circulating traffic', 'U-turns permitted here', 'Circular road under construction', 'Turn around — wrong direction'],
    exp: 'The Roundabout Ahead sign warns of an upcoming traffic circle. When entering a roundabout, yield to vehicles already in the circle. Travel counterclockwise and exit at your desired street. Roundabouts improve traffic flow and reduce severe crashes.'
  },
  zh: {
    q: '带有环形箭头的黄色菱形标志表示：',
    opts: ['前方环形交叉口——让行环形道内的车辆', '此处允许掉头', '圆形道路正在施工', '掉头——方向错误'],
    exp: '环形交叉口预警标志提示前方有环形交叉口。进入环形交叉口时，须让行已在环形道内行驶的车辆。逆时针方向行驶，并在目标出口驶出。环形交叉口有助于提升交通效率并减少严重事故。'
  },
  zhTW: {
    q: '帶有環形箭頭的黃色菱形標誌表示：',
    opts: ['前方環形交叉口——讓行環形道內的車輛', '此處允許掉頭', '圓形道路正在施工', '掉頭——方向錯誤'],
    exp: '環形交叉口預警標誌提示前方有環形交叉口。進入環形交叉口時，須讓行已在環形道內行駛的車輛。逆時針方向行駛，並在目標出口駛出。環形交叉口有助於提升交通效率並減少嚴重事故。'
  },
  es: {
    q: 'Una señal de diamante amarillo con una flecha circular indica:',
    opts: ['Glorieta (rotonda) adelante — ceda el paso al tráfico circulante', 'Se permiten giros en U aquí', 'Carretera circular en construcción', 'Dé vuelta — dirección incorrecta'],
    exp: 'La señal de Glorieta Adelante advierte de una próxima rotonda de tráfico. Al entrar a una glorieta, ceda el paso a los vehículos que ya están en el círculo. Viaje en sentido antihorario y salga en la calle deseada.'
  },
  ans: 0
},


// ═══════════════════════════════════════════════════════════════
//  BATCH 3 — Sign Shapes & Colors + Traffic Laws (Q21–30)
// ═══════════════════════════════════════════════════════════════

{
  id: 21, cat: 'signs',
  en: {
    q: 'A red octagon shape on a sign always means:',
    opts: ['Stop', 'Yield', 'Danger ahead', 'No entry'],
    exp: 'In the United States, an octagon (8-sided shape) is exclusively used for STOP signs. You can recognize the meaning of a STOP sign even if you cannot read the word — its unique shape always means stop completely.'
  },
  zh: {
    q: '红色八边形标志始终表示：',
    opts: ['停车', '让行', '前方危险', '禁止进入'],
    exp: '在美国，八边形（8边形状）专门用于停车标志。即使您看不清文字，也能通过其独特形状认出停车标志——八边形始终意味着完全停车。'
  },
  zhTW: {
    q: '紅色八邊形標誌始終表示：',
    opts: ['停車', '讓行', '前方危險', '禁止進入'],
    exp: '在美國，八邊形（8邊形狀）專門用於停車標誌。即使您看不清文字，也能通過其獨特形狀認出停車標誌——八邊形始終意味著完全停車。'
  },
  es: {
    q: 'Una forma de octágono rojo en una señal siempre significa:',
    opts: ['Alto', 'Ceda el paso', 'Peligro adelante', 'Sin entrada'],
    exp: 'En los Estados Unidos, el octágono (forma de 8 lados) se usa exclusivamente para las señales de ALTO. Puede reconocer el significado de una señal de ALTO incluso si no puede leer la palabra — su forma única siempre significa detenerse completamente.'
  },
  ans: 0
},

{
  id: 22, cat: 'signs',
  en: {
    q: 'An inverted triangle (pointing downward) shape always means:',
    opts: ['Yield', 'Stop', 'Warning', 'One way'],
    exp: 'An inverted (upside-down) triangle shape is exclusively used for YIELD signs. Like the octagon for STOP, the inverted triangle shape alone communicates "yield the right of way" even without words.'
  },
  zh: {
    q: '倒三角形（尖端朝下）标志始终表示：',
    opts: ['让行', '停车', '警告', '单向行驶'],
    exp: '倒三角形（尖端朝下）形状专门用于让行标志。就像八边形代表停车一样，倒三角形本身即可传达"让出优先通行权"的含义，即使没有文字说明。'
  },
  zhTW: {
    q: '倒三角形（尖端朝下）標誌始終表示：',
    opts: ['讓行', '停車', '警告', '單向行駛'],
    exp: '倒三角形（尖端朝下）形狀專門用於讓行標誌。就像八邊形代表停車一樣，倒三角形本身即可傳達「讓出優先通行權」的含義，即使沒有文字說明。'
  },
  es: {
    q: 'Una forma de triángulo invertido (apuntando hacia abajo) siempre significa:',
    opts: ['Ceda el paso', 'Alto', 'Advertencia', 'Un sentido'],
    exp: 'La forma de triángulo invertido (boca abajo) se usa exclusivamente para las señales de CEDA EL PASO. Al igual que el octágono para ALTO, la forma de triángulo invertido por sí sola comunica "ceda el derecho de paso" incluso sin palabras.'
  },
  ans: 0
},

{
  id: 23, cat: 'signs',
  en: {
    q: 'Yellow diamond-shaped signs are used for:',
    opts: ['Warning — alerting drivers to potential hazards ahead', 'Regulatory — telling drivers what they must do', 'Informational — providing guidance and directions', 'Construction — marking work zones'],
    exp: 'Yellow diamond-shaped signs are warning signs. They alert drivers to upcoming hazards, changes in road conditions, or situations requiring special attention. Examples include curve ahead, pedestrian crossing, and slippery when wet signs.'
  },
  zh: {
    q: '黄色菱形标志用于：',
    opts: ['警告——提醒驾驶员前方有潜在危险', '规定——告知驾驶员必须遵守的规则', '信息——提供指引和方向', '施工——标示施工区域'],
    exp: '黄色菱形标志是警告标志，提醒驾驶员前方有危险、道路条件变化或需要特别注意的情况。例如前方弯道、行人穿越和路面湿滑等标志。'
  },
  zhTW: {
    q: '黃色菱形標誌用於：',
    opts: ['警告——提醒駕駛員前方有潛在危險', '規定——告知駕駛員必須遵守的規則', '信息——提供指引和方向', '施工——標示施工區域'],
    exp: '黃色菱形標誌是警告標誌，提醒駕駛員前方有危險、道路條件變化或需要特別注意的情況。例如前方彎道、行人穿越和路面濕滑等標誌。'
  },
  es: {
    q: 'Las señales de diamante amarillo se usan para:',
    opts: ['Advertencia — alertar a los conductores sobre peligros potenciales adelante', 'Regulación — decir a los conductores lo que deben hacer', 'Información — proporcionar orientación y direcciones', 'Construcción — marcar zonas de trabajo'],
    exp: 'Las señales de diamante amarillo son señales de advertencia. Alertan a los conductores sobre peligros próximos, cambios en las condiciones de la carretera o situaciones que requieren atención especial.'
  },
  ans: 0
},

{
  id: 24, cat: 'signs',
  en: {
    q: 'White rectangular signs with black letters are used for:',
    opts: ['Regulatory information — rules and laws you must obey', 'Warnings about road hazards', 'General information and services', 'Guidance and directions'],
    exp: 'White rectangular signs with black text are regulatory signs. They inform drivers of traffic laws and regulations they must follow, such as speed limits, turn restrictions, and lane usage rules.'
  },
  zh: {
    q: '黑字白色矩形标志用于：',
    opts: ['规定信息——您必须遵守的规则和法律', '道路危险警告', '一般信息和服务', '指引和方向'],
    exp: '黑字白色矩形标志是规定性标志，告知驾驶员必须遵守的交通法律法规，例如限速、转弯限制和车道使用规定。'
  },
  zhTW: {
    q: '黑字白色矩形標誌用於：',
    opts: ['規定信息——您必須遵守的規則和法律', '道路危險警告', '一般信息和服務', '指引和方向'],
    exp: '黑字白色矩形標誌是規定性標誌，告知駕駛員必須遵守的交通法律法規，例如限速、轉彎限制和車道使用規定。'
  },
  es: {
    q: 'Las señales rectangulares blancas con letras negras se usan para:',
    opts: ['Información regulatoria — reglas y leyes que debe obedecer', 'Advertencias sobre peligros viales', 'Información general y servicios', 'Orientación y direcciones'],
    exp: 'Las señales rectangulares blancas con texto negro son señales regulatorias. Informan a los conductores sobre las leyes y regulaciones de tráfico que deben seguir, como límites de velocidad, restricciones de giro y reglas de uso de carriles.'
  },
  ans: 0
},

{
  id: 25, cat: 'signs',
  en: {
    q: 'Blue signs on California roads indicate:',
    opts: ['Motorist services such as gas, food, hospital, and lodging', 'Highway directions and route numbers', 'Warnings about road conditions', 'Recreational and cultural areas'],
    exp: 'Blue signs provide information about motorist services available nearby — including hospitals (H), rest areas, gas stations, food, and lodging. The "H" on a blue sign directs you to a hospital.'
  },
  zh: {
    q: '加州道路上的蓝色标志表示：',
    opts: ['驾驶人服务，如加油站、餐厅、医院和住宿', '公路方向和路线编号', '道路状况警告', '休闲和文化区域'],
    exp: '蓝色标志提供附近驾驶人服务的信息，包括医院（H）、休息区、加油站、餐饮和住宿。蓝色标志上的"H"指引前往医院的方向。'
  },
  zhTW: {
    q: '加州道路上的藍色標誌表示：',
    opts: ['駕駛人服務，如加油站、餐廳、醫院和住宿', '公路方向和路線編號', '道路狀況警告', '休閒和文化區域'],
    exp: '藍色標誌提供附近駕駛人服務的信息，包括醫院（H）、休息區、加油站、餐飲和住宿。藍色標誌上的「H」指引前往醫院的方向。'
  },
  es: {
    q: 'Las señales azules en las carreteras de California indican:',
    opts: ['Servicios para motoristas como gasolina, comida, hospital y alojamiento', 'Direcciones de autopista y números de ruta', 'Advertencias sobre condiciones viales', 'Áreas recreativas y culturales'],
    exp: 'Las señales azules proporcionan información sobre los servicios para motoristas disponibles cerca — incluyendo hospitales (H), áreas de descanso, gasolineras, comida y alojamiento.'
  },
  ans: 0
},

{
  id: 26, cat: 'laws',
  en: {
    q: 'When are you required to turn on your headlights in California?',
    opts: ['30 minutes after sunset until 30 minutes before sunrise, and when visibility is under 1,000 feet', 'Only after dark — nighttime hours', 'Only during rain or fog', 'When other drivers flash their lights at you'],
    exp: 'California law requires headlights from 30 minutes after sunset to 30 minutes before sunrise. You must also use headlights when visibility is less than 1,000 feet due to weather, including fog, rain, smoke, or dust.'
  },
  zh: {
    q: '在加州，什么时候必须开启车头灯？',
    opts: ['日落后30分钟至日出前30分钟，以及能见度低于1000英尺时', '仅在黑暗的夜间', '仅在下雨或有雾时', '当其他驾驶员闪灯提示您时'],
    exp: '加州法律要求在日落后30分钟至日出前30分钟期间开启车头灯。当因雾、雨、烟雾或尘土等天气原因导致能见度低于1000英尺时，也必须开启车头灯。'
  },
  zhTW: {
    q: '在加州，什麼時候必須開啟車頭燈？',
    opts: ['日落後30分鐘至日出前30分鐘，以及能見度低於1000英尺時', '僅在黑暗的夜間', '僅在下雨或有霧時', '當其他駕駛員閃燈提示您時'],
    exp: '加州法律要求在日落後30分鐘至日出前30分鐘期間開啟車頭燈。當因霧、雨、煙霧或塵土等天氣原因導致能見度低於1000英尺時，也必須開啟車頭燈。'
  },
  es: {
    q: '¿Cuándo se requiere encender los faros en California?',
    opts: ['30 minutos después del atardecer hasta 30 minutos antes del amanecer, y cuando la visibilidad es menor de 1,000 pies', 'Solo después del anochecer — horas nocturnas', 'Solo durante lluvia o niebla', 'Cuando otros conductores le hagan destellos'],
    exp: 'La ley de California requiere faros desde 30 minutos después del atardecer hasta 30 minutos antes del amanecer. También debe usar faros cuando la visibilidad es menor de 1,000 pies debido al clima, incluyendo niebla, lluvia, humo o polvo.'
  },
  ans: 0
},

{
  id: 27, cat: 'laws',
  en: {
    q: 'In California, how far in advance must you signal before turning or changing lanes?',
    opts: ['At least 100 feet before turning; signal before every lane change', 'Only when other traffic is nearby', '50 feet in cities, 200 feet on highways', 'Just as you begin to turn'],
    exp: 'California law requires you to signal at least 100 feet before making a turn. On freeways, signal at least 5 seconds before changing lanes. You must always signal regardless of whether other traffic is visible.'
  },
  zh: {
    q: '在加州，转弯或变道前需要提前多远打转向灯？',
    opts: ['转弯前至少100英尺；每次变道前均须打灯', '仅当附近有其他车辆时', '城市内50英尺，高速公路上200英尺', '开始转弯时即可'],
    exp: '加州法律要求在转弯前至少100英尺处打转向灯。在高速公路上，变道前至少需要提前5秒打灯。无论是否能看见其他车辆，您都必须打转向灯。'
  },
  zhTW: {
    q: '在加州，轉彎或變道前需要提前多遠打轉向燈？',
    opts: ['轉彎前至少100英尺；每次變道前均須打燈', '僅當附近有其他車輛時', '城市內50英尺，高速公路上200英尺', '開始轉彎時即可'],
    exp: '加州法律要求在轉彎前至少100英尺處打轉向燈。在高速公路上，變道前至少需要提前5秒打燈。無論是否能看見其他車輛，您都必須打轉向燈。'
  },
  es: {
    q: '¿Con cuánta anticipación debe señalar antes de girar o cambiar de carril en California?',
    opts: ['Al menos 100 pies antes de girar; señale antes de cada cambio de carril', 'Solo cuando hay tráfico cercano', '50 pies en ciudades, 200 pies en autopistas', 'Justo cuando comienza a girar'],
    exp: 'La ley de California requiere señalizar al menos 100 pies antes de girar. En autopistas, señalice al menos 5 segundos antes de cambiar de carril. Siempre debe señalizar independientemente de si hay otro tráfico visible.'
  },
  ans: 0
},

{
  id: 28, cat: 'laws',
  en: {
    q: 'Can you make a right turn at a red light in California?',
    opts: ['Yes, after coming to a complete stop and yielding to all traffic and pedestrians', 'No, you must always wait for a green light', 'Yes, without stopping if no traffic is present', 'Only if there is a green arrow signal'],
    exp: 'In California, you may turn right at a red light after making a complete stop, unless a sign prohibits it. You must yield to pedestrians and all other traffic before turning. Some intersections have "No Turn on Red" signs.'
  },
  zh: {
    q: '在加州，红灯时可以右转吗？',
    opts: ['可以，完全停车并让行所有车辆和行人后可以右转', '不可以，必须等绿灯', '如果没有车辆，可以不停车直接转弯', '仅当有绿色箭头信号时'],
    exp: '在加州，完全停车后，如果没有禁止转弯的标志，可以在红灯时右转。转弯前必须让行行人和所有其他车辆。某些路口设有"红灯禁止右转"标志。'
  },
  zhTW: {
    q: '在加州，紅燈時可以右轉嗎？',
    opts: ['可以，完全停車並讓行所有車輛和行人後可以右轉', '不可以，必須等綠燈', '如果沒有車輛，可以不停車直接轉彎', '僅當有綠色箭頭信號時'],
    exp: '在加州，完全停車後，如果沒有禁止轉彎的標誌，可以在紅燈時右轉。轉彎前必須讓行行人和所有其他車輛。某些路口設有「紅燈禁止右轉」標誌。'
  },
  es: {
    q: '¿Puede girar a la derecha en un semáforo en rojo en California?',
    opts: ['Sí, después de hacer una parada completa y ceder el paso a todo el tráfico y peatones', 'No, siempre debe esperar la luz verde', 'Sí, sin detenerse si no hay tráfico', 'Solo si hay una señal de flecha verde'],
    exp: 'En California, puede girar a la derecha en un semáforo en rojo después de hacer una parada completa, a menos que una señal lo prohíba. Debe ceder el paso a los peatones y a todo el tráfico antes de girar.'
  },
  ans: 0
},

{
  id: 29, cat: 'laws',
  en: {
    q: 'What is the three-second following distance rule?',
    opts: ['Choose a fixed point; when the car ahead passes it, at least 3 seconds should pass before you reach it', 'Stay at least 3 car lengths behind at all times', 'Maintain 30 mph below the car in front', 'Never drive within 3 feet of another vehicle'],
    exp: 'The 3-second rule: pick a fixed object (sign, tree) ahead. When the vehicle in front passes it, count "one-thousand-one, one-thousand-two, one-thousand-three." You should not reach that object before finishing the count. Increase to 4+ seconds in bad weather.'
  },
  zh: {
    q: '3秒跟车距离规则是什么？',
    opts: ['选择一个固定参照物；当前车经过它时，您到达它之前应该经过至少3秒', '始终保持至少3辆车身的距离', '以低于前车30英里/小时的速度行驶', '切勿在距离另一辆车3英尺以内行驶'],
    exp: '3秒规则：选择前方一个固定物体（标志、树木）。当前车经过它时，数"一千零一、一千零二、一千零三"。在数完之前，您不应到达该物体。恶劣天气下应增加到4秒以上。'
  },
  zhTW: {
    q: '3秒跟車距離規則是什麼？',
    opts: ['選擇一個固定參照物；當前車經過它時，您到達它之前應該經過至少3秒', '始終保持至少3輛車身的距離', '以低於前車30英里/小時的速度行駛', '切勿在距離另一輛車3英尺以內行駛'],
    exp: '3秒規則：選擇前方一個固定物體（標誌、樹木）。當前車經過它時，數「一千零一、一千零二、一千零三」。在數完之前，您不應到達該物體。惡劣天氣下應增加到4秒以上。'
  },
  es: {
    q: '¿Cuál es la regla de distancia de seguimiento de tres segundos?',
    opts: ['Elija un punto fijo; cuando el auto de adelante lo pase, deben pasar al menos 3 segundos antes de que usted llegue', 'Manténgase al menos 3 largos de auto detrás en todo momento', 'Mantenga 30 mph menos que el auto de adelante', 'Nunca conduzca a menos de 3 pies de otro vehículo'],
    exp: 'La regla de los 3 segundos: elija un objeto fijo adelante. Cuando el vehículo de adelante lo pase, cuente "mil uno, mil dos, mil tres." No debe llegar a ese objeto antes de terminar la cuenta. Aumente a 4+ segundos en mal clima.'
  },
  ans: 0
},

{
  id: 30, cat: 'laws',
  en: {
    q: 'What is California\'s law for using a cell phone while driving (for drivers 18 and older)?',
    opts: ['Only hands-free use is allowed — no holding the phone', 'Cell phones are completely banned while driving', 'You may use a cell phone briefly if stopped at a red light', 'Texting is allowed but talking is banned'],
    exp: 'Drivers 18 and older may only use a cell phone in hands-free mode (Bluetooth, speakerphone mounted on dash). Holding your phone while driving is illegal. Drivers under 18 may not use any wireless device while driving, even hands-free.'
  },
  zh: {
    q: '加州对18岁及以上驾驶员使用手机有什么规定？',
    opts: ['只允许免提使用——不得手持手机', '驾驶时完全禁止使用手机', '在红灯停车时可以短暂使用手机', '允许发短信但禁止通话'],
    exp: '18岁及以上的驾驶员只能以免提方式使用手机（蓝牙、固定在仪表盘上的免提设备）。驾驶时手持手机是违法的。18岁以下的驾驶员在驾驶时不得使用任何无线设备，即使是免提方式也不行。'
  },
  zhTW: {
    q: '加州對18歲及以上駕駛員使用手機有什麼規定？',
    opts: ['只允許免提使用——不得手持手機', '駕駛時完全禁止使用手機', '在紅燈停車時可以短暫使用手機', '允許發短信但禁止通話'],
    exp: '18歲及以上的駕駛員只能以免提方式使用手機（藍牙、固定在儀表板上的免提設備）。駕駛時手持手機是違法的。18歲以下的駕駛員在駕駛時不得使用任何無線設備，即使是免提方式也不行。'
  },
  es: {
    q: '¿Cuál es la ley de California para usar un teléfono celular mientras conduce (para conductores de 18 años o más)?',
    opts: ['Solo se permite el uso manos libres — no sostener el teléfono', 'Los teléfonos celulares están completamente prohibidos mientras conduce', 'Puede usar un celular brevemente si está detenido en un semáforo en rojo', 'Se permite enviar mensajes pero se prohíbe hablar'],
    exp: 'Los conductores de 18 años o más solo pueden usar un teléfono celular en modo manos libres (Bluetooth, altavoz montado en el tablero). Sostener el teléfono mientras conduce es ilegal. Los conductores menores de 18 años no pueden usar ningún dispositivo inalámbrico mientras conducen, ni siquiera manos libres.'
  },
  ans: 0
},


// ═══════════════════════════════════════════════════════════════
//  BATCH 4 — Traffic Laws (Q31–40)
// ═══════════════════════════════════════════════════════════════

{
  id: 31, cat: 'laws',
  en: {
    q: 'Are all vehicle occupants required to wear seat belts in California?',
    opts: ['Yes — driver and all passengers must be buckled at all times', 'Only the driver and front-seat passengers', 'Only children under 16', 'Seat belts are recommended but not required for adults'],
    exp: 'California\'s mandatory seat belt law requires every occupant of a vehicle to wear a seat belt, regardless of where they are seated. The driver is responsible for ensuring all passengers under 16 are buckled. Fines apply to each unbelted occupant.'
  },
  zh: { q: '在加州，车内所有人员都必须系安全带吗？', opts: ['是——司机和所有乘客随时都须系好安全带', '仅限司机和前排乘客', '仅限16岁以下儿童', '成人系安全带是建议而非强制'], exp: '加州强制安全带法要求车内每位乘员，无论坐在哪个位置，都必须系好安全带。司机有责任确保16岁以下的所有乘客已系好安全带。每位未系安全带的乘员均可被单独罚款。' },
  zhTW: { q: '在加州，車內所有人員都必須繫安全帶嗎？', opts: ['是——司機和所有乘客隨時都須繫好安全帶', '僅限司機和前排乘客', '僅限16歲以下兒童', '成人繫安全帶是建議而非強制'], exp: '加州強制安全帶法要求車內每位乘員，無論坐在哪個位置，都必須繫好安全帶。司機有責任確保16歲以下的所有乘客已繫好安全帶。每位未繫安全帶的乘員均可被單獨罰款。' },
  es: { q: '¿Todos los ocupantes del vehículo deben usar cinturón de seguridad en California?', opts: ['Sí — el conductor y todos los pasajeros deben estar abrochados en todo momento', 'Solo el conductor y los pasajeros delanteros', 'Solo niños menores de 16 años', 'Los cinturones se recomiendan pero no son obligatorios para adultos'], exp: 'La ley obligatoria de cinturón de seguridad de California requiere que todos los ocupantes del vehículo usen cinturón de seguridad, independientemente de dónde estén sentados. El conductor es responsable de que todos los pasajeros menores de 16 años estén abrochados.' },
  ans: 0
},

{
  id: 32, cat: 'laws',
  en: {
    q: 'When must you dim your high-beam headlights?',
    opts: ['Within 500 feet of an oncoming vehicle and within 300 feet when following another vehicle', 'Only in city limits — always use high beams on highways', 'Only when flashed by another driver', 'Whenever driving below 45 mph'],
    exp: 'In California, you must dim high beams (use low beams) when within 500 feet of an oncoming vehicle or within 300 feet when following another vehicle. High beams can blind other drivers, causing accidents.'
  },
  zh: { q: '什么时候必须关闭远光灯（切换为近光灯）？', opts: ['与对向来车距离500英尺以内，以及跟随其他车辆300英尺以内', '仅在市区内——在公路上始终使用远光灯', '仅当其他驾驶员闪灯时', '时速低于45英里时'], exp: '在加州，当与对向来车距离500英尺以内，或跟随其他车辆300英尺以内时，必须关闭远光灯（使用近光灯）。远光灯会使其他驾驶员眼花缭乱，从而引发事故。' },
  zhTW: { q: '什麼時候必須關閉遠光燈（切換為近光燈）？', opts: ['與對向來車距離500英尺以內，以及跟隨其他車輛300英尺以內', '僅在市區內——在公路上始終使用遠光燈', '僅當其他駕駛員閃燈時', '時速低於45英里時'], exp: '在加州，當與對向來車距離500英尺以內，或跟隨其他車輛300英尺以內時，必須關閉遠光燈（使用近光燈）。遠光燈會使其他駕駛員眼花繚亂，從而引發事故。' },
  es: { q: '¿Cuándo debe apagar las luces largas (cambiar a cortas)?', opts: ['A 500 pies de un vehículo que viene de frente y a 300 pies cuando sigue a otro vehículo', 'Solo en límites de ciudad — use luces largas en autopistas', 'Solo cuando otro conductor le haga destellos', 'Siempre que conduzca por debajo de 45 mph'], exp: 'En California, debe apagar las luces largas (usar luces cortas) cuando esté a 500 pies de un vehículo que viene de frente o a 300 pies cuando sigue a otro vehículo. Las luces largas pueden cegar a otros conductores, causando accidentes.' },
  ans: 0
},

{
  id: 33, cat: 'laws',
  en: {
    q: 'You are approaching an intersection and the traffic light turns yellow. What should you do?',
    opts: ['Stop safely if you can; if stopping would be unsafe, proceed with caution', 'Always speed up to clear the intersection before red', 'Always stop immediately — yellow means stop', 'Flash your hazard lights and proceed slowly'],
    exp: 'A yellow light means the signal is about to turn red. Stop if you can do so safely. If you are too close to stop safely, proceed through the intersection with caution. It is illegal to speed up to "beat" a yellow light.'
  },
  zh: { q: '您正驶向一个路口，此时交通灯变为黄色，您应该怎么做？', opts: ['如果能安全停车就停车；如果停车不安全，则谨慎通过', '始终加速在变红前通过路口', '始终立即停车——黄灯就是停车', '开启危险灯并缓慢通过'], exp: '黄灯表示信号即将变红。如果能安全停车，请停车。如果距离太近无法安全停车，则谨慎通过路口。加速"抢黄灯"是违法的。' },
  zhTW: { q: '您正駛向一個路口，此時交通燈變為黃色，您應該怎麼做？', opts: ['如果能安全停車就停車；如果停車不安全，則謹慎通過', '始終加速在變紅前通過路口', '始終立即停車——黃燈就是停車', '開啟危險燈並緩慢通過'], exp: '黃燈表示信號即將變紅。如果能安全停車，請停車。如果距離太近無法安全停車，則謹慎通過路口。加速「搶黃燈」是違法的。' },
  es: { q: 'Se aproxima a una intersección y el semáforo se pone amarillo. ¿Qué debe hacer?', opts: ['Detenerse con seguridad si puede; si detenerse sería inseguro, proceda con precaución', 'Siempre acelerar para cruzar antes del rojo', 'Siempre detenerse inmediatamente — el amarillo significa alto', 'Encender las luces de emergencia y avanzar despacio'], exp: 'Una luz amarilla significa que la señal está a punto de ponerse en rojo. Deténgase si puede hacerlo de forma segura. Si está demasiado cerca para detenerse con seguridad, proceda por la intersección con precaución.' },
  ans: 0
},

{
  id: 34, cat: 'laws',
  en: {
    q: 'What does a flashing red traffic light mean?',
    opts: ['Treat it as a STOP sign — come to a complete stop and proceed when safe', 'Slow down and proceed with caution', 'The signal is broken — turn around', 'Yield to cross traffic only'],
    exp: 'A flashing red light has the same meaning as a STOP sign. You must come to a complete stop, yield to all traffic and pedestrians, then proceed when it is safe to do so.'
  },
  zh: { q: '闪烁的红色交通灯是什么意思？', opts: ['按停车标志处理——完全停车，确认安全后通过', '减速并谨慎通过', '信号灯故障——掉头', '仅让横向来车先行'], exp: '闪烁红灯的含义与停车标志相同。您必须完全停车，让行所有车辆和行人，然后在确认安全后通行。' },
  zhTW: { q: '閃爍的紅色交通燈是什麼意思？', opts: ['按停車標誌處理——完全停車，確認安全後通過', '減速並謹慎通過', '信號燈故障——掉頭', '僅讓橫向來車先行'], exp: '閃爍紅燈的含義與停車標誌相同。您必須完全停車，讓行所有車輛和行人，然後在確認安全後通行。' },
  es: { q: '¿Qué significa un semáforo rojo intermitente?', opts: ['Trátelo como una señal de ALTO — deténgase completamente y avance cuando sea seguro', 'Reduzca la velocidad y proceda con precaución', 'La señal está rota — dé la vuelta', 'Ceda el paso solo al tráfico cruzado'], exp: 'Una luz roja intermitente tiene el mismo significado que una señal de ALTO. Debe detenerse completamente, ceder el paso a todo el tráfico y peatones, luego proceder cuando sea seguro.' },
  ans: 0
},

{
  id: 35, cat: 'laws',
  en: {
    q: 'What does a flashing yellow traffic light mean?',
    opts: ['Slow down and proceed with caution', 'Stop and wait for green', 'Yield to oncoming traffic before proceeding', 'Merge into the left lane'],
    exp: 'A flashing yellow light is a warning to slow down and proceed with caution. You do not need to stop, but you must be alert for cross traffic, pedestrians, and other hazards.'
  },
  zh: { q: '闪烁的黄色交通灯是什么意思？', opts: ['减速并谨慎通过', '停车等待绿灯', '让行对向车辆后再通过', '并入左车道'], exp: '闪烁黄灯警告您减速并谨慎通行。您无需停车，但必须注意横向来车、行人和其他危险。' },
  zhTW: { q: '閃爍的黃色交通燈是什麼意思？', opts: ['減速並謹慎通過', '停車等待綠燈', '讓行對向車輛後再通過', '並入左車道'], exp: '閃爍黃燈警告您減速並謹慎通行。您無需停車，但必須注意橫向來車、行人和其他危險。' },
  es: { q: '¿Qué significa un semáforo amarillo intermitente?', opts: ['Reduzca la velocidad y proceda con precaución', 'Deténgase y espere el verde', 'Ceda el paso al tráfico que viene antes de continuar', 'Fusiónese en el carril izquierdo'], exp: 'Una luz amarilla intermitente es una advertencia para reducir la velocidad y proceder con precaución. No necesita detenerse, pero debe estar alerta ante el tráfico cruzado, peatones y otros peligros.' },
  ans: 0
},

{
  id: 36, cat: 'laws',
  en: {
    q: 'A traffic signal is not working at an intersection. What should you do?',
    opts: ['Treat it as a four-way stop — all drivers stop and take turns', 'The driver on the busier road has the right of way', 'Proceed normally — signals are advisory only', 'Come to a complete stop and do not proceed'],
    exp: 'When a traffic signal is completely dark (not working), treat the intersection as a four-way stop. All vehicles from all directions must stop, then proceed in turn. This is required by California law.'
  },
  zh: { q: '路口的交通灯不工作了，您应该怎么做？', opts: ['按四路停车处理——所有驾驶员停车依次通行', '较繁忙道路上的驾驶员有优先通行权', '正常通行——信号灯仅供参考', '完全停车且不得通行'], exp: '当交通灯完全熄灭（不工作）时，应将该路口视为四路停车路口处理。所有方向的车辆均须停车，然后依次通行。这是加州法律的要求。' },
  zhTW: { q: '路口的交通燈不工作了，您應該怎麼做？', opts: ['按四路停車處理——所有駕駛員停車依次通行', '較繁忙道路上的駕駛員有優先通行權', '正常通行——信號燈僅供參考', '完全停車且不得通行'], exp: '當交通燈完全熄滅（不工作）時，應將該路口視為四路停車路口處理。所有方向的車輛均須停車，然後依次通行。這是加州法律的要求。' },
  es: { q: 'Un semáforo no funciona en una intersección. ¿Qué debe hacer?', opts: ['Trátelo como un alto de cuatro vías — todos los conductores se detienen y toman turnos', 'El conductor en la carretera más transitada tiene el derecho de paso', 'Continúe normalmente — las señales son solo de asesoramiento', 'Deténgase completamente y no avance'], exp: 'Cuando un semáforo está completamente apagado (sin funcionar), trate la intersección como un alto de cuatro vías. Todos los vehículos de todas las direcciones deben detenerse, luego proceder en turno.' },
  ans: 0
},

{
  id: 37, cat: 'laws',
  en: {
    q: 'When are you allowed to pass another vehicle on the right side?',
    opts: ['When the vehicle ahead is making or waiting to make a left turn, and there is a paved lane to the right', 'Whenever traffic is slow', 'Only on a freeway with multiple lanes', 'Passing on the right is always illegal in California'],
    exp: 'You may pass on the right when: (1) the vehicle ahead is turning left, and there is enough paved road to pass safely, or (2) on a one-way street or road wide enough for two or more lanes of traffic. Passing on the shoulder is illegal.'
  },
  zh: { q: '什么情况下允许从右侧超车？', opts: ['当前方车辆正在或等待左转，且右侧有铺装车道时', '每当交通缓慢时', '仅在多车道高速公路上', '在加州从右侧超车始终违法'], exp: '以下情况可以从右侧超车：(1) 前方车辆正在左转，且右侧有足够的铺装路面可安全超车；(2) 在单行道或有两条及以上行车道宽度的道路上。从路肩超车是违法的。' },
  zhTW: { q: '什麼情況下允許從右側超車？', opts: ['當前方車輛正在或等待左轉，且右側有鋪裝車道時', '每當交通緩慢時', '僅在多車道高速公路上', '在加州從右側超車始終違法'], exp: '以下情況可以從右側超車：(1) 前方車輛正在左轉，且右側有足夠的鋪裝路面可安全超車；(2) 在單行道或有兩條及以上行車道寬度的道路上。從路肩超車是違法的。' },
  es: { q: '¿Cuándo se le permite pasar a otro vehículo por el lado derecho?', opts: ['Cuando el vehículo de adelante está girando o esperando girar a la izquierda, y hay un carril pavimentado a la derecha', 'Siempre que el tráfico sea lento', 'Solo en una autopista con múltiples carriles', 'Adelantar por la derecha siempre es ilegal en California'], exp: 'Puede adelantar por la derecha cuando: (1) el vehículo de adelante está girando a la izquierda y hay suficiente carretera pavimentada para adelantar con seguridad, o (2) en una calle de un sentido o carretera lo suficientemente ancha para dos o más carriles.' },
  ans: 0
},

{
  id: 38, cat: 'laws',
  en: {
    q: 'What is the law regarding texting while driving in California?',
    opts: ['Texting while driving is illegal for all drivers at all times', 'Texting is allowed at red lights and stop signs', 'Only prohibited on freeways', 'Allowed if using voice-to-text'],
    exp: 'Texting while driving is illegal in California for all drivers, at all times — even when stopped at a red light or stop sign. The vehicle must be pulled safely off the road and parked to use any handheld device for texting.'
  },
  zh: { q: '加州关于驾驶时发短信的法律规定是什么？', opts: ['任何时候驾驶时发短信均为违法，适用于所有驾驶员', '在红灯和停车标志处允许发短信', '仅在高速公路上禁止', '使用语音转文字时允许'], exp: '在加州，所有驾驶员在任何时候驾驶时发短信均为违法——即使在红灯或停车标志处停车时也不行。必须将车辆安全停在路边并熄火，才能使用手持设备发短信。' },
  zhTW: { q: '加州關於駕駛時發短信的法律規定是什麼？', opts: ['任何時候駕駛時發短信均為違法，適用於所有駕駛員', '在紅燈和停車標誌處允許發短信', '僅在高速公路上禁止', '使用語音轉文字時允許'], exp: '在加州，所有駕駛員在任何時候駕駛時發短信均為違法——即使在紅燈或停車標誌處停車時也不行。必須將車輛安全停在路邊並熄火，才能使用手持設備發短信。' },
  es: { q: '¿Cuál es la ley sobre enviar mensajes de texto mientras conduce en California?', opts: ['Enviar mensajes de texto mientras conduce es ilegal para todos los conductores en todo momento', 'Se permite enviar mensajes en semáforos en rojo y señales de alto', 'Solo está prohibido en autopistas', 'Permitido si usa voz a texto'], exp: 'Enviar mensajes de texto mientras conduce es ilegal en California para todos los conductores, en todo momento — incluso cuando está detenido en un semáforo en rojo o señal de alto. El vehículo debe estar estacionado de forma segura fuera de la carretera para usar cualquier dispositivo.' },
  ans: 0
},

{
  id: 39, cat: 'laws',
  en: {
    q: 'When can you legally make a U-turn in California?',
    opts: ['At intersections where it can be done safely and no sign prohibits it', 'Anywhere on a public road if no cars are present', 'Only in residential areas', 'U-turns are always illegal on public roads'],
    exp: 'U-turns are legal where: (1) no sign prohibits them, (2) you have a clear view of 200 feet in each direction, (3) it is not at a railroad crossing, fire station entrance, or where a police officer is directing traffic, and (4) it can be done safely.'
  },
  zh: { q: '在加州什么情况下可以合法掉头？', opts: ['在没有禁止标志且可以安全完成的路口', '公共道路上任何没有车辆的地方', '仅在住宅区', '公共道路上掉头始终违法'], exp: '以下情况掉头合法：(1) 没有禁止掉头的标志；(2) 向每个方向均有200英尺的清晰视野；(3) 不在铁路道口、消防站入口处或交警指挥交通的路口；(4) 可以安全完成。' },
  zhTW: { q: '在加州什麼情況下可以合法掉頭？', opts: ['在沒有禁止標誌且可以安全完成的路口', '公共道路上任何沒有車輛的地方', '僅在住宅區', '公共道路上掉頭始終違法'], exp: '以下情況掉頭合法：(1) 沒有禁止掉頭的標誌；(2) 向每個方向均有200英尺的清晰視野；(3) 不在鐵路道口、消防站入口處或交警指揮交通的路口；(4) 可以安全完成。' },
  es: { q: '¿Cuándo puede hacer legalmente un giro en U en California?', opts: ['En intersecciones donde se puede hacer de forma segura y ninguna señal lo prohíbe', 'En cualquier lugar de una carretera pública si no hay autos', 'Solo en áreas residenciales', 'Los giros en U siempre son ilegales en carreteras públicas'], exp: 'Los giros en U son legales donde: (1) ninguna señal los prohíbe, (2) tiene una vista despejada de 200 pies en cada dirección, (3) no es en un cruce ferroviario, entrada de estación de bomberos, o donde un oficial dirige el tráfico, y (4) se puede hacer de forma segura.' },
  ans: 0
},

{
  id: 40, cat: 'laws',
  en: {
    q: 'What should you do when you hear or see an emergency vehicle with lights and sirens approaching?',
    opts: ['Pull to the right edge of the road and stop until the emergency vehicle passes', 'Speed up to get out of its way quickly', 'Stop immediately in your current lane', 'Continue driving — emergency vehicles will go around you'],
    exp: 'When an emergency vehicle with lights or siren is approaching, you must immediately pull to the right edge of the road (or curb), stop, and remain stopped until it passes. This law applies whether the vehicle is approaching from ahead or behind.'
  },
  zh: { q: '当您听到或看到带灯光和警报声的紧急车辆驶来时，您应该怎么做？', opts: ['靠右停在路边，等紧急车辆通过后再继续行驶', '加速给它让路', '立即在当前车道停车', '继续行驶——紧急车辆会绕过您'], exp: '当带有灯光或警报的紧急车辆驶来时，您必须立即靠右停在路边（或路缘），停车，并保持停车状态直到其通过。无论紧急车辆从前方还是后方驶来，此法律均适用。' },
  zhTW: { q: '當您聽到或看到帶燈光和警報聲的緊急車輛駛來時，您應該怎麼做？', opts: ['靠右停在路邊，等緊急車輛通過後再繼續行駛', '加速給它讓路', '立即在當前車道停車', '繼續行駛——緊急車輛會繞過您'], exp: '當帶有燈光或警報的緊急車輛駛來時，您必須立即靠右停在路邊（或路緣），停車，並保持停車狀態直到其通過。無論緊急車輛從前方還是後方駛來，此法律均適用。' },
  es: { q: '¿Qué debe hacer cuando escucha o ve un vehículo de emergencia con luces y sirenas aproximándose?', opts: ['Orillarse al borde derecho de la carretera y detenerse hasta que el vehículo de emergencia pase', 'Acelerar para quitarse del camino rápidamente', 'Detenerse inmediatamente en su carril actual', 'Continuar conduciendo — los vehículos de emergencia lo rodearán'], exp: 'Cuando un vehículo de emergencia con luces o sirena se aproxima, debe inmediatamente orillarse al borde derecho de la carretera (o la acera), detenerse y permanecer detenido hasta que pase. Esta ley aplica ya sea que el vehículo venga de adelante o de atrás.' },
  ans: 0
},


// ═══════════════════════════════════════════════════════════════
//  BATCH 5 — Traffic Laws (Q41–50)
// ═══════════════════════════════════════════════════════════════

{
  id: 41, cat: 'laws',
  en: {
    q: 'What is California\'s "Move Over" law?',
    opts: ['You must move over a lane (or slow to a safe speed) when passing stopped emergency vehicles, tow trucks, or Caltrans vehicles with flashing lights', 'You must move over only for police vehicles', 'Pull over whenever any vehicle has hazard lights on', 'Slow to 10 mph when passing any parked vehicle'],
    exp: 'California\'s Move Over Law requires drivers to move over one lane (when safe) or slow to a speed safe for conditions when passing any stopped emergency vehicle, tow truck, or Caltrans vehicle displaying flashing lights on the roadside. Violating this law can result in a fine.'
  },
  zh: { q: '加州的"让行"法（Move Over Law）是什么规定？', opts: ['经过停有闪灯的紧急车辆、拖车或交通部车辆时，须变换到相邻车道（或减速至安全速度）', '仅在经过警车时须变道', '任何车辆开启危险灯时均须靠边停车', '经过任何停靠车辆时减速至10英里/小时'], exp: '加州让行法要求驾驶员在经过停在路边、亮着闪灯的紧急车辆、拖车或交通部车辆时，须（在安全的情况下）向相邻车道变换，或减速至适合路况的安全速度。违反此法律可能被罚款。' },
  zhTW: { q: '加州的「讓行」法（Move Over Law）是什麼規定？', opts: ['經過停有閃燈的緊急車輛、拖車或交通部車輛時，須變換到相鄰車道（或減速至安全速度）', '僅在經過警車時須變道', '任何車輛開啟危險燈時均須靠邊停車', '經過任何停靠車輛時減速至10英里/小時'], exp: '加州讓行法要求駕駛員在經過停在路邊、亮著閃燈的緊急車輛、拖車或交通部車輛時，須（在安全的情況下）向相鄰車道變換，或減速至適合路況的安全速度。違反此法律可能被罰款。' },
  es: { q: '¿Cuál es la ley de "Ceder el Paso" (Move Over) de California?', opts: ['Debe cambiar de carril (o reducir a velocidad segura) al pasar vehículos de emergencia, grúas o vehículos de Caltrans detenidos con luces intermitentes', 'Debe ceder el paso solo para vehículos policiales', 'Orillarse cuando cualquier vehículo tenga luces de emergencia', 'Reducir a 10 mph al pasar cualquier vehículo estacionado'], exp: 'La Ley de Ceder el Paso de California requiere que los conductores cambien de carril (cuando sea seguro) o reduzcan a una velocidad segura al pasar cualquier vehículo de emergencia detenido, grúa o vehículo de Caltrans con luces intermitentes en la orilla de la carretera.' },
  ans: 0
},

{
  id: 42, cat: 'laws',
  en: {
    q: 'What must you do before changing lanes on a road or freeway?',
    opts: ['Signal, check mirrors, check blind spots by glancing over your shoulder, then change lanes smoothly', 'Signal and immediately change lanes', 'Check mirrors only — no need to look over shoulder', 'Only signal if other vehicles are nearby'],
    exp: 'Before changing lanes: (1) Signal your intent, (2) Check all mirrors, (3) Check blind spots by looking over your shoulder, (4) Make sure the lane is clear, then (5) smoothly change lanes while maintaining your speed. Never change multiple lanes at once.'
  },
  zh: { q: '在道路或高速公路上变道前，您必须做什么？', opts: ['打转向灯，查看后视镜，转头检查盲区，然后平稳变道', '打转向灯后立即变道', '仅查看后视镜——无需转头', '仅当附近有其他车辆时才打转向灯'], exp: '变道前：(1) 打转向灯示意；(2) 查看所有后视镜；(3) 转头查看盲区；(4) 确认车道畅通；(5) 保持速度平稳变道。切勿一次同时变换多条车道。' },
  zhTW: { q: '在道路或高速公路上變道前，您必須做什麼？', opts: ['打轉向燈，查看後視鏡，轉頭檢查盲區，然後平穩變道', '打轉向燈後立即變道', '僅查看後視鏡——無需轉頭', '僅當附近有其他車輛時才打轉向燈'], exp: '變道前：(1) 打轉向燈示意；(2) 查看所有後視鏡；(3) 轉頭查看盲區；(4) 確認車道暢通；(5) 保持速度平穩變道。切勿一次同時變換多條車道。' },
  es: { q: '¿Qué debe hacer antes de cambiar de carril en una carretera o autopista?', opts: ['Señalizar, revisar espejos, revisar puntos ciegos mirando sobre su hombro, luego cambiar de carril suavemente', 'Señalizar e inmediatamente cambiar de carril', 'Revisar solo los espejos — no es necesario mirar sobre el hombro', 'Solo señalizar si hay otros vehículos cerca'], exp: 'Antes de cambiar de carril: (1) Señalice su intención, (2) Revise todos los espejos, (3) Revise los puntos ciegos mirando sobre su hombro, (4) Asegúrese de que el carril esté libre, luego (5) cambie de carril suavemente manteniendo su velocidad.' },
  ans: 0
},

{
  id: 43, cat: 'laws',
  en: {
    q: 'When is it legal to pass another vehicle in a no-passing zone?',
    opts: ['It is never legal to pass in a designated no-passing zone', 'Only if the vehicle ahead is driving 10+ mph under the speed limit', 'You may pass if you can do so within 3 seconds', 'Only if the other driver signals you to pass'],
    exp: 'Passing in a no-passing zone (solid yellow line on your side, or a no-passing pennant sign) is always illegal, regardless of the other vehicle\'s speed. No-passing zones exist because sight distances are too limited to pass safely.'
  },
  zh: { q: '什么情况下在禁止超车区超车是合法的？', opts: ['在规定的禁止超车区超车永远是违法的', '仅当前方车辆速度比限速低10英里/小时以上时', '如果能在3秒内完成超车', '仅当对方驾驶员示意您超车时'], exp: '在禁止超车区（您一侧为实线黄线，或有禁止超车旗帜标志）超车永远是违法的，无论前方车辆的速度如何。禁止超车区的存在是因为视距不足以安全完成超车。' },
  zhTW: { q: '什麼情況下在禁止超車區超車是合法的？', opts: ['在規定的禁止超車區超車永遠是違法的', '僅當前方車輛速度比限速低10英里/小時以上時', '如果能在3秒內完成超車', '僅當對方駕駛員示意您超車時'], exp: '在禁止超車區（您一側為實線黃線，或有禁止超車旗幟標誌）超車永遠是違法的，無論前方車輛的速度如何。禁止超車區的存在是因為視距不足以安全完成超車。' },
  es: { q: '¿Cuándo es legal adelantar a otro vehículo en una zona de no adelantar?', opts: ['Nunca es legal adelantar en una zona de no adelantar designada', 'Solo si el vehículo de adelante conduce 10+ mph por debajo del límite', 'Puede adelantar si puede hacerlo en 3 segundos', 'Solo si el otro conductor le señala que adelante'], exp: 'Adelantar en una zona de no adelantar (línea amarilla sólida en su lado, o señal de banderín de no adelantar) siempre es ilegal, independientemente de la velocidad del otro vehículo.' },
  ans: 0
},

{
  id: 44, cat: 'laws',
  en: {
    q: 'What is California\'s "Basic Speed Law"?',
    opts: ['You must never drive faster than is safe for current conditions, regardless of the posted speed limit', 'Always drive exactly at the posted speed limit', 'Drive at the speed of surrounding traffic', 'The speed limit only applies during daytime hours'],
    exp: 'California\'s Basic Speed Law states you must never drive faster than is safe for current road, weather, and traffic conditions — even if you are at or below the posted speed limit. For example, if it is foggy, you must slow below the posted limit if conditions require it.'
  },
  zh: { q: '什么是加州的"基本速度法则"？', opts: ['无论限速标志如何规定，您都不得以超过当前路况安全速度行驶', '始终以限速标志规定的速度行驶', '以周围车辆的速度行驶', '限速仅在白天适用'], exp: '加州基本速度法则规定，无论道路限速如何，您都不得以超过当前道路、天气和交通状况所允许的安全速度行驶。例如，在有雾的情况下，如果条件需要，您必须降低到限速以下行驶。' },
  zhTW: { q: '什麼是加州的「基本速度法則」？', opts: ['無論限速標誌如何規定，您都不得以超過當前路況安全速度行駛', '始終以限速標誌規定的速度行駛', '以周圍車輛的速度行駛', '限速僅在白天適用'], exp: '加州基本速度法則規定，無論道路限速如何，您都不得以超過當前道路、天氣和交通狀況所允許的安全速度行駛。例如，在有霧的情況下，如果條件需要，您必須降低到限速以下行駛。' },
  es: { q: '¿Cuál es la "Ley Básica de Velocidad" de California?', opts: ['Nunca debe conducir más rápido de lo que es seguro para las condiciones actuales, independientemente del límite publicado', 'Siempre conduzca exactamente al límite de velocidad publicado', 'Conduzca a la velocidad del tráfico circundante', 'El límite de velocidad solo aplica durante el día'], exp: 'La Ley Básica de Velocidad de California establece que nunca debe conducir más rápido de lo que es seguro para las condiciones actuales de la carretera, el clima y el tráfico — incluso si está en el límite de velocidad o por debajo. Por ejemplo, si hay niebla, debe reducir la velocidad.' },
  ans: 0
},

{
  id: 45, cat: 'laws',
  en: {
    q: 'What must drivers do when a school bus has stopped and its red lights are flashing?',
    opts: ['Stop and remain stopped until the red lights stop flashing and the bus moves, regardless of direction of travel', 'Only stop if you are driving behind the bus', 'Slow to 15 mph and proceed carefully', 'Stop only if children are visible crossing the road'],
    exp: 'When a school bus stops with red lights flashing on a two-lane road or undivided highway, ALL traffic in both directions must stop and remain stopped. On a divided highway with a barrier, only traffic behind the bus must stop. You may proceed when the red lights stop flashing.'
  },
  zh: { q: '当校车停车且红灯闪烁时，驾驶员必须怎么做？', opts: ['无论行进方向如何，均须停车，保持停车状态直到红灯停止闪烁且校车开始移动', '只有在校车后方行驶时才须停车', '减速至15英里/小时并谨慎通过', '仅当看见儿童穿越道路时才停车'], exp: '当校车在双车道道路或无中央分隔带的公路上停车并闪烁红灯时，两个方向的所有车辆均须停车。在有护栏的分隔公路上，只有校车后方的车辆须停车。红灯停止闪烁后方可继续行驶。' },
  zhTW: { q: '當校車停車且紅燈閃爍時，駕駛員必須怎麼做？', opts: ['無論行進方向如何，均須停車，保持停車狀態直到紅燈停止閃爍且校車開始移動', '只有在校車後方行駛時才須停車', '減速至15英里/小時並謹慎通過', '僅當看見兒童穿越道路時才停車'], exp: '當校車在雙車道道路或無中央分隔帶的公路上停車並閃爍紅燈時，兩個方向的所有車輛均須停車。在有護欄的分隔公路上，只有校車後方的車輛須停車。紅燈停止閃爍後方可繼續行駛。' },
  es: { q: '¿Qué deben hacer los conductores cuando un autobús escolar se ha detenido y sus luces rojas están intermitentes?', opts: ['Detenerse y permanecer detenido hasta que las luces rojas dejen de parpadear y el autobús se mueva, independientemente de la dirección de viaje', 'Detenerse solo si va detrás del autobús', 'Reducir a 15 mph y proceder con cuidado', 'Detenerse solo si los niños son visibles cruzando la carretera'], exp: 'Cuando un autobús escolar se detiene con luces rojas intermitentes en una carretera de dos carriles o sin divisor, TODOS los vehículos en ambas direcciones deben detenerse. En una autopista dividida con barrera, solo el tráfico detrás del autobús debe detenerse.' },
  ans: 0
},

{
  id: 46, cat: 'laws',
  en: {
    q: 'What is the law for children under 2 years old riding in a vehicle?',
    opts: ['Must be in a rear-facing car seat in the back seat', 'Can ride in a forward-facing seat if over 20 pounds', 'Must sit in the back seat but can use a seat belt', 'No special requirement — regular seat belt is fine'],
    exp: 'California law requires children under 2 years old to ride in a rear-facing car seat in the back seat. This is the safest position because it distributes crash forces across the entire back, head, and neck. A rear-facing seat should never be placed in the front seat of a car with an active airbag.'
  },
  zh: { q: '加州法律对2岁以下儿童乘车有什么规定？', opts: ['必须坐在后排朝后的儿童安全座椅中', '如果体重超过20磅，可以使用朝前的座椅', '必须坐在后座但可以使用安全带', '没有特殊要求——普通安全带即可'], exp: '加州法律要求2岁以下儿童必须坐在后排朝后的儿童安全座椅中。这是最安全的位置，因为碰撞时力量会分散到整个背部、头部和颈部。朝后的安全座椅切勿放置在有安全气囊的前排座位上。' },
  zhTW: { q: '加州法律對2歲以下兒童乘車有什麼規定？', opts: ['必須坐在後排朝後的兒童安全座椅中', '如果體重超過20磅，可以使用朝前的座椅', '必須坐在後座但可以使用安全帶', '沒有特殊要求——普通安全帶即可'], exp: '加州法律要求2歲以下兒童必須坐在後排朝後的兒童安全座椅中。這是最安全的位置，因為碰撞時力量會分散到整個背部、頭部和頸部。朝後的安全座椅切勿放置在有安全氣囊的前排座位上。' },
  es: { q: '¿Cuál es la ley para niños menores de 2 años que viajan en un vehículo?', opts: ['Deben estar en un asiento de carro orientado hacia atrás en el asiento trasero', 'Pueden ir en un asiento orientado hacia adelante si pesan más de 20 libras', 'Deben sentarse en el asiento trasero pero pueden usar cinturón', 'Sin requisito especial — el cinturón regular está bien'], exp: 'La ley de California requiere que los niños menores de 2 años viajen en un asiento de carro orientado hacia atrás en el asiento trasero. Esta es la posición más segura porque distribuye las fuerzas del choque en toda la espalda, cabeza y cuello.' },
  ans: 0
},

{
  id: 47, cat: 'laws',
  en: {
    q: 'What is the legal blood alcohol concentration (BAC) limit for drivers 21 and older in California?',
    opts: ['0.08% or higher is considered driving under the influence (DUI)', '0.10% — the traditional standard', '0.05% — lower than federal standard', 'Any detectable amount of alcohol'],
    exp: 'In California, it is illegal to drive with a BAC of 0.08% or higher if you are 21 or older. For commercial drivers the limit is 0.04%. For drivers under 21, the zero tolerance law means any BAC of 0.01% or higher can result in license suspension.'
  },
  zh: { q: '在加州，21岁及以上驾驶员的合法血液酒精浓度（BAC）上限是多少？', opts: ['0.08%或以上被视为酒后驾车（DUI）', '0.10%——传统标准', '0.05%——低于联邦标准', '任何可检测到的酒精含量'], exp: '在加州，21岁及以上的驾驶员血液酒精浓度达到或超过0.08%即为违法驾车（DUI）。商业驾驶员的上限为0.04%。对于21岁以下的驾驶员，零容忍法规定BAC达到0.01%或以上即可导致驾照被吊销。' },
  zhTW: { q: '在加州，21歲及以上駕駛員的合法血液酒精濃度（BAC）上限是多少？', opts: ['0.08%或以上被視為酒後駕車（DUI）', '0.10%——傳統標準', '0.05%——低於聯邦標準', '任何可檢測到的酒精含量'], exp: '在加州，21歲及以上的駕駛員血液酒精濃度達到或超過0.08%即為違法駕車（DUI）。商業駕駛員的上限為0.04%。對於21歲以下的駕駛員，零容忍法規定BAC達到0.01%或以上即可導致駕照被吊Sales。' },
  es: { q: '¿Cuál es el límite legal de concentración de alcohol en sangre (BAC) para conductores de 21 años o más en California?', opts: ['0.08% o más se considera conducir bajo la influencia (DUI)', '0.10% — el estándar tradicional', '0.05% — menor que el estándar federal', 'Cualquier cantidad detectable de alcohol'], exp: 'En California, es ilegal conducir con un BAC de 0.08% o más si tiene 21 años o más. Para conductores comerciales el límite es 0.04%. Para conductores menores de 21, la ley de tolerancia cero significa que cualquier BAC de 0.01% o más puede resultar en suspensión de licencia.' },
  ans: 0
},

{
  id: 48, cat: 'laws',
  en: {
    q: 'What does "implied consent" mean in California driving law?',
    opts: ['By driving on California roads, you automatically consent to chemical testing (breath, blood, or urine) if lawfully arrested for DUI', 'You agree to obey all traffic laws when you get your license', 'You allow police to search your vehicle at any time', 'You consent to being recorded by traffic cameras'],
    exp: 'California\'s Implied Consent Law means that by driving in California, you have implicitly agreed to submit to a chemical test (breath or blood) if arrested for DUI. Refusing the test results in automatic license suspension of 1 year for a first offense, plus additional penalties.'
  },
  zh: { q: '加州驾驶法律中"默示同意"是什么意思？', opts: ['在加州道路上驾驶，即自动同意在因DUI被合法逮捕时接受化学检测（呼气、血液或尿液）', '获得驾照时同意遵守所有交通法规', '允许警察随时搜查您的车辆', '同意被交通摄像头记录'], exp: '加州默示同意法意味着，在加州驾车即隐含地同意在因DUI被逮捕时接受化学检测（呼气或血液）。拒绝检测将导致首次违规驾照被自动吊销1年，并附加额外处罚。' },
  zhTW: { q: '加州駕駛法律中「默示同意」是什麼意思？', opts: ['在加州道路上駕駛，即自動同意在因DUI被合法逮捕時接受化學檢測（呼氣、血液或尿液）', '獲得駕照時同意遵守所有交通法規', '允許警察隨時搜查您的車輛', '同意被交通攝像頭記錄'], exp: '加州默示同意法意味著，在加州駕車即隱含地同意在因DUI被逮捕時接受化學檢測（呼氣或血液）。拒絕檢測將導致首次違規駕照被自動吊銷1年，並附加額外處罰。' },
  es: { q: '¿Qué significa el "consentimiento implícito" en la ley de conducción de California?', opts: ['Al conducir en carreteras de California, automáticamente consiente las pruebas químicas (aliento, sangre u orina) si es arrestado legalmente por DUI', 'Acepta obedecer todas las leyes de tráfico cuando obtiene su licencia', 'Permite a la policía registrar su vehículo en cualquier momento', 'Consiente ser grabado por cámaras de tráfico'], exp: 'La Ley de Consentimiento Implícito de California significa que al conducir en California, ha aceptado implícitamente someterse a una prueba química (aliento o sangre) si es arrestado por DUI. Negarse a la prueba resulta en suspensión automática de licencia de 1 año por primera ofensa.' },
  ans: 0
},

{
  id: 49, cat: 'laws',
  en: {
    q: 'When driving in heavy fog, which lights should you use?',
    opts: ['Low-beam headlights or fog lights — not high beams', 'High-beam headlights to see further ahead', 'Hazard lights only, no headlights', 'No lights are necessary if you can see 100 feet ahead'],
    exp: 'In fog, always use low-beam headlights or fog lights. High beams reflect off the fog and reduce visibility even further. California law requires headlights when you cannot see 1,000 feet ahead. Reduce your speed significantly in heavy fog.'
  },
  zh: { q: '在浓雾中行驶时应使用哪种灯光？', opts: ['近光灯或雾灯——不要使用远光灯', '远光灯以看得更远', '仅使用危险灯，不开车头灯', '如果能看见100英尺前方，则不需要灯光'], exp: '在有雾时，应始终使用近光灯或雾灯。远光灯会被雾反射，使能见度进一步降低。加州法律规定，当前方能见度低于1000英尺时须开启车头灯。在浓雾中应大幅降低速度。' },
  zhTW: { q: '在濃霧中行駛時應使用哪種燈光？', opts: ['近光燈或霧燈——不要使用遠光燈', '遠光燈以看得更遠', '僅使用危險燈，不開車頭燈', '如果能看見100英尺前方，則不需要燈光'], exp: '在有霧時，應始終使用近光燈或霧燈。遠光燈會被霧反射，使能見度進一步降低。加州法律規定，當前方能見度低於1000英尺時須開啟車頭燈。在濃霧中應大幅降低速度。' },
  es: { q: '¿Qué luces debe usar cuando conduce en niebla densa?', opts: ['Faros de luz corta o faros antiniebla — no faros largos', 'Faros de luz larga para ver más adelante', 'Solo luces de emergencia, sin faros', 'No se necesitan luces si puede ver 100 pies adelante'], exp: 'En niebla, siempre use faros de luz corta o antiniebla. Los faros largos se reflejan en la niebla y reducen aún más la visibilidad. La ley de California requiere faros cuando no puede ver 1,000 pies adelante. Reduzca significativamente la velocidad en niebla densa.' },
  ans: 0
},

{
  id: 50, cat: 'laws',
  en: {
    q: 'What is the penalty for a first-offense DUI conviction in California?',
    opts: ['Up to 6 months in jail, fines up to $1,000, license suspension, and required DUI program', 'Only a fine — no jail time for first offense', 'License suspension only — no jail or fine', '30-day license suspension with no other penalties'],
    exp: 'A first-offense DUI in California can result in: up to 6 months in county jail, fines of $390–$1,000 (plus assessments, actual total can exceed $10,000), 6-month license suspension, 3-9 month DUI program, and possible ignition interlock device requirement.'
  },
  zh: { q: '在加州，初次DUI定罪的处罚是什么？', opts: ['最高6个月监禁、最高1000美元罚款、吊销驾照及须参加DUI课程', '仅罚款——初次不判监禁', '仅吊销驾照——无监禁或罚款', '30天驾照暂停，无其他处罚'], exp: '加州初次DUI可能导致：最高6个月县监禁、390至1000美元罚款（加上各项附加费，实际总额可能超过1万美元）、6个月驾照暂停、3至9个月DUI课程，以及可能需要安装点火互锁装置。' },
  zhTW: { q: '在加州，初次DUI定罪的處罰是什麼？', opts: ['最高6個月監禁、最高1000美元罰款、吊銷駕照及須參加DUI課程', '僅罰款——初次不判監禁', '僅吊銷駕照——無監禁或罰款', '30天駕照暫停，無其他處罰'], exp: '加州初次DUI可能導致：最高6個月縣監禁、390至1000美元罰款（加上各項附加費，實際總額可能超過1萬美元）、6個月駕照暫停、3至9個月DUI課程，以及可能需要安裝點火互鎖裝置。' },
  es: { q: '¿Cuál es la penalidad por una primera condena de DUI en California?', opts: ['Hasta 6 meses de cárcel, multas hasta $1,000, suspensión de licencia y programa de DUI requerido', 'Solo una multa — sin tiempo en cárcel por primera ofensa', 'Solo suspensión de licencia — sin cárcel ni multa', 'Suspensión de licencia de 30 días sin otras penalidades'], exp: 'Un DUI de primera ofensa en California puede resultar en: hasta 6 meses en cárcel del condado, multas de $390–$1,000 (más cargos adicionales, el total real puede superar $10,000), suspensión de licencia de 6 meses, programa de DUI de 3-9 meses, y posible dispositivo de bloqueo de encendido.' },
  ans: 0
},


// ═══════════════════════════════════════════════════════════════
//  BATCH 6 — Right of Way (Q51–60)
// ═══════════════════════════════════════════════════════════════

{
  id: 51, cat: 'rightofway',
  en: {
    q: 'At an uncontrolled intersection (no signs or signals), who has the right of way?',
    opts: ['The vehicle that arrived first; if simultaneous, the vehicle on the right', 'The vehicle traveling on the larger road', 'The vehicle traveling faster', 'The vehicle turning right always has priority'],
    exp: 'At an uncontrolled intersection, the first vehicle to arrive has the right of way. If two vehicles arrive at the same time, the driver on the left must yield to the driver on the right.'
  },
  zh: { q: '在无控制路口（无标志或信号灯），谁拥有优先通行权？', opts: ['先到达的车辆；若同时到达，右方车辆优先', '行驶在较宽道路上的车辆', '行驶速度较快的车辆', '右转车辆始终优先'], exp: '在无控制路口，先到达的车辆拥有优先通行权。若两辆车同时到达，左方驾驶员须让行右方驾驶员。' },
  zhTW: { q: '在無控制路口（無標誌或信號燈），誰擁有優先通行權？', opts: ['先到達的車輛；若同時到達，右方車輛優先', '行駛在較寬道路上的車輛', '行駛速度較快的車輛', '右轉車輛始終優先'], exp: '在無控制路口，先到達的車輛擁有優先通行權。若兩輛車同時到達，左方駕駛員須讓行右方駕駛員。' },
  es: { q: 'En una intersección sin control (sin señales ni semáforos), ¿quién tiene el derecho de paso?', opts: ['El vehículo que llegó primero; si es simultáneo, el vehículo de la derecha', 'El vehículo que viaja por la carretera más grande', 'El vehículo que viaja más rápido', 'El vehículo que gira a la derecha siempre tiene prioridad'], exp: 'En una intersección sin control, el primer vehículo en llegar tiene el derecho de paso. Si dos vehículos llegan al mismo tiempo, el conductor de la izquierda debe ceder el paso al conductor de la derecha.' },
  ans: 0
},

{
  id: 52, cat: 'rightofway',
  en: {
    q: 'You want to turn left at an intersection. Oncoming traffic is present. Who has the right of way?',
    opts: ['Oncoming traffic going straight has the right of way over your left turn', 'You have the right of way because you are turning', 'The first vehicle to enter the intersection has priority', 'Yield to pedestrians only — not oncoming vehicles'],
    exp: 'When turning left, you must yield to all oncoming traffic going straight or turning right. Left-turning drivers must wait for a safe gap in oncoming traffic before completing the turn. This is a very common cause of collisions.'
  },
  zh: { q: '您想在路口左转。有对向来车。谁拥有优先通行权？', opts: ['直行的对向车辆比您的左转拥有优先通行权', '因为您在转弯，所以您优先', '先进入路口的车辆有优先权', '只需让行行人——不需要让对向车辆'], exp: '左转时，您必须让行所有直行或右转的对向车辆。左转驾驶员必须等待对向来车出现安全间隔后，才能完成转弯。这是非常常见的碰撞原因。' },
  zhTW: { q: '您想在路口左轉。有對向來車。誰擁有優先通行權？', opts: ['直行的對向車輛比您的左轉擁有優先通行權', '因為您在轉彎，所以您優先', '先進入路口的車輛有優先權', '只需讓行行人——不需要讓對向車輛'], exp: '左轉時，您必須讓行所有直行或右轉的對向車輛。左轉駕駛員必須等待對向來車出現安全間隔後，才能完成轉彎。這是非常常見的碰撞原因。' },
  es: { q: 'Quiere girar a la izquierda en una intersección. Hay tráfico que viene de frente. ¿Quién tiene el derecho de paso?', opts: ['El tráfico que viene de frente tiene derecho de paso sobre su giro a la izquierda', 'Usted tiene derecho de paso porque está girando', 'El primer vehículo en entrar a la intersección tiene prioridad', 'Ceda el paso solo a los peatones — no a los vehículos que vienen'], exp: 'Al girar a la izquierda, debe ceder el paso a todo el tráfico que viene de frente que va recto o gira a la derecha. Los conductores que giran a la izquierda deben esperar un espacio seguro antes de completar el giro.' },
  ans: 0
},

{
  id: 53, cat: 'rightofway',
  en: {
    q: 'A pedestrian is crossing the street at a marked crosswalk. What must you do?',
    opts: ['Yield the right of way to the pedestrian and wait until they have completely crossed', 'Honk to alert the pedestrian and proceed slowly', 'Proceed if the pedestrian is on the far side of the road', 'Stop only if the pedestrian steps in front of your vehicle'],
    exp: 'California law requires drivers to yield the right of way to pedestrians in any marked or unmarked crosswalk. You must stop and wait until the pedestrian has completely crossed — not just until they are out of your lane. Failing to yield is a moving violation.'
  },
  zh: { q: '一位行人正在有标志的人行横道过街。您必须怎么做？', opts: ['让行行人，等待直到其完全穿越', '鸣笛提醒行人并缓慢通过', '如果行人在道路对侧则可通行', '仅当行人走到您车前时才停车'], exp: '加州法律要求驾驶员在任何有或无标志的人行横道处让行行人。您必须停车等待，直到行人完全穿越——不是仅离开您的车道即可。未能让行是违规行为。' },
  zhTW: { q: '一位行人正在有標誌的人行橫道過街。您必須怎麼做？', opts: ['讓行行人，等待直到其完全穿越', '鳴笛提醒行人並緩慢通過', '如果行人在道路對側則可通行', '僅當行人走到您車前時才停車'], exp: '加州法律要求駕駛員在任何有或無標誌的人行橫道處讓行行人。您必須停車等待，直到行人完全穿越——不是僅離開您的車道即可。未能讓行是違規行為。' },
  es: { q: 'Un peatón está cruzando la calle en un cruce peatonal marcado. ¿Qué debe hacer?', opts: ['Ceder el derecho de paso al peatón y esperar hasta que haya cruzado completamente', 'Tocar el claxon para alertar al peatón y avanzar despacio', 'Continuar si el peatón está en el lado lejano de la carretera', 'Detenerse solo si el peatón se coloca frente a su vehículo'], exp: 'La ley de California requiere que los conductores cedan el derecho de paso a los peatones en cualquier cruce peatonal marcado o no marcado. Debe detenerse y esperar hasta que el peatón haya cruzado completamente — no solo hasta que salga de su carril.' },
  ans: 0
},

{
  id: 54, cat: 'rightofway',
  en: {
    q: 'You are entering a roundabout. Who has the right of way?',
    opts: ['Vehicles already circulating inside the roundabout', 'Vehicles entering the roundabout from the right', 'You always have priority when entering', 'The largest vehicle has priority'],
    exp: 'When entering a roundabout, you must yield to all vehicles already circulating inside the circle. Once you are in the roundabout, you have the right of way over entering vehicles. Travel counterclockwise and exit at your desired street without stopping.'
  },
  zh: { q: '您正在进入环形交叉口。谁拥有优先通行权？', opts: ['已在环形道内行驶的车辆', '从右侧进入环形交叉口的车辆', '进入时您始终优先', '最大的车辆优先'], exp: '进入环形交叉口时，您必须让行已在圆环内行驶的所有车辆。一旦您进入环形道内，则对进入的车辆拥有优先权。逆时针方向行驶，在目标出口驶出，无需停车。' },
  zhTW: { q: '您正在進入環形交叉口。誰擁有優先通行權？', opts: ['已在環形道內行駛的車輛', '從右側進入環形交叉口的車輛', '進入時您始終優先', '最大的車輛優先'], exp: '進入環形交叉口時，您必須讓行已在圓環內行駛的所有車輛。一旦您進入環形道內，則對進入的車輛擁有優先權。逆時針方向行駛，在目標出口駛出，無需停車。' },
  es: { q: 'Está entrando a una glorieta. ¿Quién tiene el derecho de paso?', opts: ['Los vehículos que ya circulan dentro de la glorieta', 'Los vehículos que entran desde la derecha', 'Siempre tiene prioridad al entrar', 'El vehículo más grande tiene prioridad'], exp: 'Al entrar a una glorieta, debe ceder el paso a todos los vehículos que ya circulan dentro del círculo. Una vez que está en la glorieta, tiene el derecho de paso sobre los vehículos que entran. Viaje en sentido antihorario y salga en la calle deseada sin detenerse.' },
  ans: 0
},

{
  id: 55, cat: 'rightofway',
  en: {
    q: 'You are at a T-intersection on the road that ends. Who must yield?',
    opts: ['You must yield to all traffic on the through road', 'Traffic on the through road must yield to you', 'The vehicle on the right always yields', 'Whoever arrives last yields'],
    exp: 'At a T-intersection, the driver on the road that ends (the bottom of the T) must yield to all traffic on the through road (the top of the T). This applies even if there are no signs or signals.'
  },
  zh: { q: '您在T形路口的断头路一侧。谁须让行？', opts: ['您须让行贯通道路上的所有车辆', '贯通道路上的车辆须让行您', '右方车辆始终让行', '最后到达的车辆让行'], exp: '在T形路口，处于断头路一侧（T形底部）的驾驶员须让行贯通道路（T形顶部）上的所有车辆。即使没有标志或信号灯，此规则也适用。' },
  zhTW: { q: '您在T形路口的斷頭路一側。誰須讓行？', opts: ['您須讓行貫通道路上的所有車輛', '貫通道路上的車輛須讓行您', '右方車輛始終讓行', '最後到達的車輛讓行'], exp: '在T形路口，處於斷頭路一側（T形底部）的駕駛員須讓行貫通道路（T形頂部）上的所有車輛。即使沒有標誌或信號燈，此規則也適用。' },
  es: { q: 'Está en una intersección en T en la carretera que termina. ¿Quién debe ceder el paso?', opts: ['Debe ceder el paso a todo el tráfico en la carretera continua', 'El tráfico en la carretera continua debe cederle el paso', 'El vehículo de la derecha siempre cede', 'El que llega último cede'], exp: 'En una intersección en T, el conductor en la carretera que termina (la parte inferior de la T) debe ceder el paso a todo el tráfico en la carretera continua (la parte superior de la T). Esto aplica incluso si no hay señales ni semáforos.' },
  ans: 0
},

{
  id: 56, cat: 'rightofway',
  en: {
    q: 'A visually impaired person with a white cane or guide dog is crossing the street. What must you do?',
    opts: ['Come to a complete stop and wait until they have fully crossed before proceeding', 'Slow down and carefully drive around them', 'Sound your horn once to alert them, then proceed', 'They must wait for a walk signal before you need to stop'],
    exp: 'California law gives the right of way to blind pedestrians using a white cane or guide dog at all intersections. You must come to a complete stop and not proceed until the pedestrian has completely crossed the roadway and is safely on the other side.'
  },
  zh: { q: '一位使用白手杖或导盲犬的视障人士正在过街。您必须怎么做？', opts: ['完全停车，等到其完全过街后再继续行驶', '减速并小心绕过他们', '鸣笛一次提醒他们，然后继续', '他们必须等待步行信号，您才须停车'], exp: '加州法律赋予使用白手杖或导盲犬的盲人行人在所有路口的优先通行权。您必须完全停车，直到行人完全穿越道路并安全到达对侧后方可继续行驶。' },
  zhTW: { q: '一位使用白手杖或導盲犬的視障人士正在過街。您必須怎麼做？', opts: ['完全停車，等到其完全過街後再繼續行駛', '減速並小心繞過他們', '鳴笛一次提醒他們，然後繼續', '他們必須等待步行信號，您才須停車'], exp: '加州法律賦予使用白手杖或導盲犬的盲人行人在所有路口的優先通行權。您必須完全停車，直到行人完全穿越道路並安全到達對側後方可繼續行駛。' },
  es: { q: 'Una persona con discapacidad visual con bastón blanco o perro guía está cruzando la calle. ¿Qué debe hacer?', opts: ['Detenerse completamente y esperar hasta que hayan cruzado totalmente antes de continuar', 'Reducir la velocidad y conducir cuidadosamente alrededor de ellos', 'Tocar el claxon una vez para alertarlos, luego continuar', 'Deben esperar una señal de caminar antes de que usted tenga que detenerse'], exp: 'La ley de California da el derecho de paso a los peatones ciegos que usan bastón blanco o perro guía en todas las intersecciones. Debe detenerse completamente y no avanzar hasta que el peatón haya cruzado completamente la calzada.' },
  ans: 0
},

{
  id: 57, cat: 'rightofway',
  en: {
    q: 'When entering a freeway from an on-ramp, who has the right of way?',
    opts: ['Traffic already on the freeway has the right of way — you must yield and merge safely', 'You have the right of way because you are entering', 'The faster vehicle has the right of way', 'Whoever signals first has priority'],
    exp: 'Traffic already traveling on the freeway has the right of way. You must accelerate on the on-ramp to match freeway speed, find a gap in traffic, and merge smoothly. Do not stop on the ramp unless absolutely necessary, as it is extremely dangerous.'
  },
  zh: { q: '从匝道进入高速公路时，谁拥有优先通行权？', opts: ['已在高速公路上行驶的车辆拥有优先权——您须让行并安全并入', '因为您正在进入，所以您优先', '较快的车辆拥有优先权', '先打转向灯的人优先'], exp: '已在高速公路上行驶的车辆拥有优先通行权。您必须在匝道上加速以匹配高速公路速度，找到车流间隙，并平稳并入。除非绝对必要，否则不要在匝道上停车，因为这极其危险。' },
  zhTW: { q: '從匝道進入高速公路時，誰擁有優先通行權？', opts: ['已在高速公路上行駛的車輛擁有優先權——您須讓行並安全並入', '因為您正在進入，所以您優先', '較快的車輛擁有優先權', '先打轉向燈的人優先'], exp: '已在高速公路上行駛的車輛擁有優先通行權。您必須在匝道上加速以匹配高速公路速度，找到車流間隙，並平穩並入。除非絕對必要，否則不要在匝道上停車，因為這極其危險。' },
  es: { q: 'Al entrar a una autopista desde una rampa de acceso, ¿quién tiene el derecho de paso?', opts: ['El tráfico ya en la autopista tiene el derecho de paso — debe ceder el paso y fusionarse con seguridad', 'Usted tiene el derecho de paso porque está entrando', 'El vehículo más rápido tiene el derecho de paso', 'El primero en señalizar tiene prioridad'], exp: 'El tráfico que ya viaja en la autopista tiene el derecho de paso. Debe acelerar en la rampa para igualar la velocidad de la autopista, encontrar un espacio en el tráfico y fusionarse suavemente. No se detenga en la rampa a menos que sea absolutamente necesario.' },
  ans: 0
},

{
  id: 58, cat: 'rightofway',
  en: {
    q: 'You are driving on a mountain road and meet an oncoming vehicle. The road is too narrow for both. Who yields?',
    opts: ['The vehicle going downhill must yield to the vehicle going uphill', 'The vehicle going uphill must yield to the vehicle going downhill', 'The smaller vehicle always yields', 'The vehicle that arrived at the narrow section last must yield'],
    exp: 'On a narrow mountain road where two vehicles cannot pass, the vehicle going downhill must yield to the vehicle going uphill. This is because it is usually easier for the downhill driver to back up than the uphill driver. The downhill vehicle should pull aside if possible.'
  },
  zh: { q: '您在山路上行驶，遇到对向来车。道路太窄无法两车并行。谁须让行？', opts: ['下行车辆须让行上行车辆', '上行车辆须让行下行车辆', '较小的车辆始终让行', '最后到达窄路段的车辆须让行'], exp: '在两车无法并行的狭窄山路上，下行车辆须让行上行车辆。这是因为下行驾驶员通常比上行驾驶员更容易倒车。如果可能，下行车辆应靠边停让。' },
  zhTW: { q: '您在山路上行駛，遇到對向來車。道路太窄無法兩車並行。誰須讓行？', opts: ['下行車輛須讓行上行車輛', '上行車輛須讓行下行車輛', '較小的車輛始終讓行', '最後到達窄路段的車輛須讓行'], exp: '在兩車無法並行的狹窄山路上，下行車輛須讓行上行車輛。這是因為下行駕駛員通常比上行駕駛員更容易倒車。如果可能，下行車輛應靠邊停讓。' },
  es: { q: 'Conduce en una carretera de montaña y se encuentra con un vehículo que viene. La carretera es demasiado estrecha para ambos. ¿Quién cede el paso?', opts: ['El vehículo que baja debe ceder el paso al que sube', 'El vehículo que sube debe ceder el paso al que baja', 'El vehículo más pequeño siempre cede', 'El vehículo que llegó último a la sección estrecha debe ceder'], exp: 'En una carretera de montaña estrecha donde dos vehículos no pueden pasar, el vehículo que baja debe ceder el paso al que sube. Esto se debe a que generalmente es más fácil para el conductor que baja hacer marcha atrás.' },
  ans: 0
},

{
  id: 59, cat: 'rightofway',
  en: {
    q: 'You want to exit a parking lot onto a street. Who has the right of way?',
    opts: ['All traffic on the street, including pedestrians and cyclists', 'You have the right of way if you are already moving', 'The first vehicle to reach the exit has priority', 'Pedestrians only — not vehicles on the street'],
    exp: 'When exiting a parking lot, driveway, or alley, you must yield the right of way to all traffic on the public street — including pedestrians on the sidewalk, cyclists in bike lanes, and all vehicles. You are entering a public roadway and bear the responsibility to do so safely.'
  },
  zh: { q: '您想从停车场驶出到街道上。谁拥有优先通行权？', opts: ['街道上的所有交通，包括行人和骑行者', '如果您已经在移动则您优先', '先到达出口的车辆优先', '仅行人优先——街道上的车辆不计'], exp: '从停车场、车道或小巷驶出时，您必须让行公共街道上的所有交通——包括人行道上的行人、自行车道上的骑行者以及所有车辆。您正在进入公共道路，须负责安全进入。' },
  zhTW: { q: '您想從停車場駛出到街道上。誰擁有優先通行權？', opts: ['街道上的所有交通，包括行人和騎行者', '如果您已經在移動則您優先', '先到達出口的車輛優先', '僅行人優先——街道上的車輛不計'], exp: '從停車場、車道或小巷駛出時，您必須讓行公共街道上的所有交通——包括人行道上的行人、自行車道上的騎行者以及所有車輛。您正在進入公共道路，須負責安全進入。' },
  es: { q: 'Quiere salir de un estacionamiento hacia la calle. ¿Quién tiene el derecho de paso?', opts: ['Todo el tráfico en la calle, incluyendo peatones y ciclistas', 'Usted tiene el derecho de paso si ya está en movimiento', 'El primer vehículo en llegar a la salida tiene prioridad', 'Solo los peatones — no los vehículos en la calle'], exp: 'Al salir de un estacionamiento, entrada privada o callejón, debe ceder el derecho de paso a todo el tráfico en la vía pública — incluyendo peatones en la banqueta, ciclistas en carriles de bicicletas y todos los vehículos.' },
  ans: 0
},

{
  id: 60, cat: 'rightofway',
  en: {
    q: 'When may you proceed through a red light after stopping?',
    opts: ['When turning right, after stopping and yielding (unless a sign prohibits it); or turning left from a one-way onto a one-way street', 'Never — red always means stop completely', 'After waiting 30 seconds if no traffic is present', 'Only police and emergency vehicles may proceed on red'],
    exp: 'After a complete stop at a red light, you may: (1) Turn right if no sign prohibits it and after yielding to all traffic and pedestrians, or (2) Turn left from a one-way street onto another one-way street, after stopping and yielding. Proceeding straight through a red light is never permitted.'
  },
  zh: { q: '停车后，什么情况下可以在红灯时通行？', opts: ['右转时（停车让行后，且无标志禁止）；或从单行道左转进入另一条单行道时', '从不——红灯永远表示完全停车', '如果没有车辆，等待30秒后', '仅警察和紧急车辆可以闯红灯'], exp: '在红灯处完全停车后，您可以：(1) 如无禁止标志，在让行所有车辆和行人后右转；(2) 从单行道左转进入另一条单行道，停车让行后。直行闯红灯在任何情况下都是不允许的。' },
  zhTW: { q: '停車後，什麼情況下可以在紅燈時通行？', opts: ['右轉時（停車讓行後，且無標誌禁止）；或從單行道左轉進入另一條單行道時', '從不——紅燈永遠表示完全停車', '如果沒有車輛，等待30秒後', '僅警察和緊急車輛可以闖紅燈'], exp: '在紅燈處完全停車後，您可以：(1) 如無禁止標誌，在讓行所有車輛和行人後右轉；(2) 從單行道左轉進入另一條單行道，停車讓行後。直行闖紅燈在任何情況下都是不允許的。' },
  es: { q: '¿Cuándo puede avanzar a través de una luz roja después de detenerse?', opts: ['Al girar a la derecha, después de detenerse y ceder (a menos que una señal lo prohíba); o girando a la izquierda de una calle de un sentido a otra de un sentido', 'Nunca — el rojo siempre significa detenerse completamente', 'Después de esperar 30 segundos si no hay tráfico', 'Solo policías y vehículos de emergencia pueden avanzar en rojo'], exp: 'Después de una parada completa en un semáforo en rojo, puede: (1) Girar a la derecha si ninguna señal lo prohíbe y después de ceder a todo el tráfico y peatones, o (2) Girar a la izquierda desde una calle de un sentido hacia otra de un sentido, después de detenerse y ceder.' },
  ans: 0
},


// ═══════════════════════════════════════════════════════════════
//  BATCH 7 — Speed Limits (Q61–70)
// ═══════════════════════════════════════════════════════════════

{
  id: 61, cat: 'speed',
  en: {
    q: 'What is the maximum speed limit on most California freeways?',
    opts: ['65 mph, or 70 mph where posted', '55 mph statewide', '75 mph unless otherwise posted', '60 mph for all California highways'],
    exp: 'The maximum speed limit on most California freeways is 65 mph. Some freeways are posted at 70 mph. Trucks over 3 tons and vehicles towing trailers have a maximum of 55 mph on freeways, regardless of the posted speed limit.'
  },
  zh: { q: '加州大多数高速公路的最高限速是多少？', opts: ['65英里/小时，或标志标明的70英里/小时', '全州统一55英里/小时', '除非另有规定，否则为75英里/小时', '所有加州公路为60英里/小时'], exp: '加州大多数高速公路的最高限速为65英里/小时。部分高速公路标示为70英里/小时。超过3吨的卡车和拖曳拖车的车辆在高速公路上最高限速为55英里/小时，无论标志限速如何。' },
  zhTW: { q: '加州大多數高速公路的最高限速是多少？', opts: ['65英里/小時，或標誌標明的70英里/小時', '全州統一55英里/小時', '除非另有規定，否則為75英里/小時', '所有加州公路為60英里/小時'], exp: '加州大多數高速公路的最高限速為65英里/小時。部分高速公路標示為70英里/小時。超過3噸的卡車和拖曳拖車的車輛在高速公路上最高限速為55英里/小時，無論標誌限速如何。' },
  es: { q: '¿Cuál es el límite de velocidad máximo en la mayoría de las autopistas de California?', opts: ['65 mph, o 70 mph donde esté publicado', '55 mph en todo el estado', '75 mph a menos que se indique lo contrario', '60 mph para todas las autopistas de California'], exp: 'El límite de velocidad máximo en la mayoría de las autopistas de California es 65 mph. Algunas autopistas están publicadas a 70 mph. Los camiones de más de 3 toneladas y los vehículos que remolcan tienen un máximo de 55 mph en autopistas, independientemente del límite publicado.' },
  ans: 0
},

{
  id: 62, cat: 'speed',
  en: {
    q: 'What is the speed limit in a residential area when no speed limit sign is posted?',
    opts: ['25 mph — the prima facie speed limit for residential districts', '35 mph — standard urban speed', '15 mph — default for all neighborhoods', '45 mph — unless children are present'],
    exp: 'In California, the prima facie (default) speed limit in a residential district is 25 mph when no speed limit sign is posted. This applies to streets in neighborhoods where people live. You must still follow the basic speed law — drive slower if conditions require it.'
  },
  zh: { q: '在没有限速标志的住宅区，限速是多少？', opts: ['25英里/小时——住宅区的法定限速', '35英里/小时——城市标准速度', '15英里/小时——所有社区的默认速度', '45英里/小时——除非有儿童在场'], exp: '在加州，没有限速标志的住宅区的法定（默认）限速为25英里/小时。这适用于有居民居住的街道。您仍须遵守基本速度法则——如果路况需要，须降低速度。' },
  zhTW: { q: '在沒有限速標誌的住宅區，限速是多少？', opts: ['25英里/小時——住宅區的法定限速', '35英里/小時——城市標準速度', '15英里/小時——所有社區的預設速度', '45英里/小時——除非有兒童在場'], exp: '在加州，沒有限速標誌的住宅區的法定（預設）限速為25英里/小時。這適用於有居民居住的街道。您仍須遵守基本速度法則——如果路況需要，須降低速度。' },
  es: { q: '¿Cuál es el límite de velocidad en una zona residencial cuando no hay señal de velocidad publicada?', opts: ['25 mph — el límite de velocidad prima facie para zonas residenciales', '35 mph — velocidad urbana estándar', '15 mph — predeterminado para todos los vecindarios', '45 mph — a menos que haya niños presentes'], exp: 'En California, el límite de velocidad prima facie (predeterminado) en una zona residencial es 25 mph cuando no hay señal de velocidad publicada. Esto aplica a calles en vecindarios donde vive gente. Aún debe seguir la ley básica de velocidad.' },
  ans: 0
},

{
  id: 63, cat: 'speed',
  en: {
    q: 'What is the speed limit in an alley in California?',
    opts: ['15 mph', '25 mph', '20 mph', '10 mph'],
    exp: 'The prima facie speed limit in any alley in California is 15 mph. Alleys are narrow roadways between or behind buildings. The low speed limit reflects the limited visibility and the potential for pedestrians and vehicles to appear suddenly.'
  },
  zh: { q: '加州小巷（alley）的限速是多少？', opts: ['15英里/小时', '25英里/小时', '20英里/小时', '10英里/小时'], exp: '加州任何小巷的法定限速为15英里/小时。小巷是建筑物之间或后面的狭窄通道。低速限制反映了有限的能见度以及行人和车辆突然出现的可能性。' },
  zhTW: { q: '加州小巷（alley）的限速是多少？', opts: ['15英里/小時', '25英里/小時', '20英里/小時', '10英里/小時'], exp: '加州任何小巷的法定限速為15英里/小時。小巷是建築物之間或後面的狹窄通道。低速限制反映了有限的能見度以及行人和車輛突然出現的可能性。' },
  es: { q: '¿Cuál es el límite de velocidad en un callejón en California?', opts: ['15 mph', '25 mph', '20 mph', '10 mph'], exp: 'El límite de velocidad prima facie en cualquier callejón en California es 15 mph. Los callejones son vías estrechas entre o detrás de edificios. El límite de velocidad bajo refleja la visibilidad limitada y el potencial de que aparezcan peatones y vehículos de repente.' },
  ans: 0
},

{
  id: 64, cat: 'speed',
  en: {
    q: 'What is the speed limit within 100 feet of a railroad crossing when visibility is limited?',
    opts: ['15 mph', '25 mph', '10 mph', '35 mph'],
    exp: 'California law sets a 15 mph prima facie speed limit within 100 feet of a railroad crossing when you cannot see the tracks clearly in both directions for 400 feet. This lower speed gives you time to stop if a train appears.'
  },
  zh: { q: '能见度有限时，在铁路道口100英尺以内的限速是多少？', opts: ['15英里/小时', '25英里/小时', '10英里/小时', '35英里/小时'], exp: '加州法律规定，当无法在两个方向上清楚看到400英尺范围内的铁轨时，铁路道口100英尺以内的法定限速为15英里/小时。较低的速度给您足够时间在火车出现时停车。' },
  zhTW: { q: '能見度有限時，在鐵路道口100英尺以內的限速是多少？', opts: ['15英里/小時', '25英里/小時', '10英里/小時', '35英里/小時'], exp: '加州法律規定，當無法在兩個方向上清楚看到400英尺範圍內的鐵軌時，鐵路道口100英尺以內的法定限速為15英里/小時。較低的速度給您足夠時間在火車出現時停車。' },
  es: { q: '¿Cuál es el límite de velocidad dentro de 100 pies de un cruce ferroviario cuando la visibilidad es limitada?', opts: ['15 mph', '25 mph', '10 mph', '35 mph'], exp: 'La ley de California establece un límite de velocidad prima facie de 15 mph dentro de 100 pies de un cruce ferroviario cuando no puede ver las vías claramente en ambas direcciones por 400 pies. Esta velocidad más baja le da tiempo para detenerse si aparece un tren.' },
  ans: 0
},

{
  id: 65, cat: 'speed',
  en: {
    q: 'Fines for speeding in a construction zone in California are:',
    opts: ['Doubled compared to the standard fine', 'The same as a regular speeding ticket', 'Tripled if workers are present', 'Only issued to commercial drivers'],
    exp: 'California law doubles the fine for speeding violations committed in a construction zone (work zone). These enhanced fines apply whether or not workers are actually present. The same doubling applies to school zones. This serves as a strong deterrent to protect workers and children.'
  },
  zh: { q: '在加州施工区超速的罚款是：', opts: ['比标准罚款加倍', '与普通超速罚单相同', '如果有工人在场则三倍', '仅适用于商业驾驶员'], exp: '加州法律规定，在施工区（作业区）违规超速的罚款加倍。无论工人是否实际在场，这一加重罚款均适用。学区也适用同样的加倍规定。这是保护工人和儿童安全的有力震慑。' },
  zhTW: { q: '在加州施工區超速的罰款是：', opts: ['比標準罰款加倍', '與普通超速罰單相同', '如果有工人在場則三倍', '僅適用於商業駕駛員'], exp: '加州法律規定，在施工區（作業區）違規超速的罰款加倍。無論工人是否實際在場，這一加重罰款均適用。學區也適用同樣的加倍規定。這是保護工人和兒童安全的有力震懾。' },
  es: { q: 'Las multas por exceso de velocidad en una zona de construcción en California son:', opts: ['El doble en comparación con la multa estándar', 'Iguales a una multa por exceso de velocidad regular', 'El triple si hay trabajadores presentes', 'Solo se emiten a conductores comerciales'], exp: 'La ley de California duplica la multa por violaciones de velocidad cometidas en una zona de construcción (zona de trabajo). Estas multas mejoradas aplican haya o no trabajadores presentes. Lo mismo aplica para zonas escolares. Esto sirve como un fuerte disuasivo.' },
  ans: 0
},

{
  id: 66, cat: 'speed',
  en: {
    q: 'When approaching a blind intersection where visibility is less than 100 feet, what is the maximum speed?',
    opts: ['15 mph', '25 mph', '20 mph', '10 mph'],
    exp: 'At a blind intersection where you cannot see traffic approaching from either side within 100 feet, the prima facie speed limit is 15 mph. This gives you time to react and stop if cross traffic appears. A blind intersection has no stop signs or signals and has limited visibility.'
  },
  zh: { q: '接近能见度不足100英尺的盲区路口时，最高速度是多少？', opts: ['15英里/小时', '25英里/小时', '20英里/小时', '10英里/小时'], exp: '在无法看到100英尺内横向来车的盲区路口，法定限速为15英里/小时。这给您足够的时间在横向车辆出现时做出反应并停车。盲区路口没有停车标志或信号灯，且能见度有限。' },
  zhTW: { q: '接近能見度不足100英尺的盲區路口時，最高速度是多少？', opts: ['15英里/小時', '25英里/小時', '20英里/小時', '10英里/小時'], exp: '在無法看到100英尺內橫向來車的盲區路口，法定限速為15英里/小時。這給您足夠的時間在橫向車輛出現時做出反應並停車。盲區路口沒有停車標誌或信號燈，且能見度有限。' },
  es: { q: '¿Cuál es la velocidad máxima al acercarse a una intersección ciega donde la visibilidad es menor de 100 pies?', opts: ['15 mph', '25 mph', '20 mph', '10 mph'], exp: 'En una intersección ciega donde no puede ver el tráfico que se aproxima desde ninguno de los lados dentro de 100 pies, el límite de velocidad prima facie es 15 mph. Esto le da tiempo para reaccionar y detenerse si aparece tráfico cruzado.' },
  ans: 0
},

{
  id: 67, cat: 'speed',
  en: {
    q: 'If you are driving too slowly on a freeway, you can be cited for:',
    opts: ['Impeding traffic — driving unreasonably slow is illegal', 'Nothing — there is no minimum speed law', 'Only if you are below 45 mph', 'Slow driving is encouraged for fuel efficiency'],
    exp: 'California has a minimum speed law. You cannot drive so slowly that you block the normal flow of traffic, except when necessary for safety. Driving too slowly on a freeway impedes other drivers and creates hazardous conditions. Drivers can be cited for impeding traffic.'
  },
  zh: { q: '如果您在高速公路上行驶过慢，可能因为什么被开罚单？', opts: ['妨碍交通——不合理地缓慢驾驶是违法的', '没有——没有最低限速法', '仅当速度低于45英里/小时时', '慢速驾驶有利于节省燃油，被鼓励'], exp: '加州有最低限速法。除非出于安全必要，否则您不得以阻碍正常交通流的速度驾驶。在高速公路上行驶过慢会妨碍其他驾驶员，造成危险。驾驶员可能因妨碍交通而被罚款。' },
  zhTW: { q: '如果您在高速公路上行駛過慢，可能因為什麼被開罰單？', opts: ['妨礙交通——不合理地緩慢駕駛是違法的', '沒有——沒有最低限速法', '僅當速度低於45英里/小時時', '慢速駕駛有利於節省燃油，被鼓勵'], exp: '加州有最低限速法。除非出於安全必要，否則您不得以阻礙正常交通流的速度駕駛。在高速公路上行駛過慢會妨礙其他駕駛員，造成危險。駕駛員可能因妨礙交通而被罰款。' },
  es: { q: 'Si conduce demasiado lento en una autopista, puede ser citado por:', opts: ['Obstruir el tráfico — conducir de forma irrazonablemente lenta es ilegal', 'Nada — no hay ley de velocidad mínima', 'Solo si está por debajo de 45 mph', 'Conducir lento se fomenta para eficiencia de combustible'], exp: 'California tiene una ley de velocidad mínima. No puede conducir tan lento que bloquee el flujo normal del tráfico, excepto cuando sea necesario para la seguridad. Conducir demasiado lento en una autopista obstruye a otros conductores y crea condiciones peligrosas.' },
  ans: 0
},

{
  id: 68, cat: 'speed',
  en: {
    q: 'How does speed affect your stopping distance?',
    opts: ['Doubling your speed quadruples (4x) your braking distance', 'Doubling your speed doubles your braking distance', 'Speed has no effect on stopping distance', 'Doubling your speed triples your braking distance'],
    exp: 'Braking distance increases with the square of your speed. If you double your speed from 25 to 50 mph, your braking distance increases four times — not two times. At 60 mph, it takes about 180 feet to stop; at 30 mph, only about 45 feet. This is why speeding is so dangerous.'
  },
  zh: { q: '速度如何影响您的停车距离？', opts: ['速度翻倍，制动距离增加四倍', '速度翻倍，制动距离也翻倍', '速度对停车距离没有影响', '速度翻倍，制动距离增加三倍'], exp: '制动距离与速度的平方成正比。如果您将速度从25英里/小时提高到50英里/小时（翻倍），制动距离增加四倍而不是两倍。以60英里/小时行驶约需180英尺才能停下；以30英里/小时只需约45英尺。这就是超速如此危险的原因。' },
  zhTW: { q: '速度如何影響您的停車距離？', opts: ['速度翻倍，制動距離增加四倍', '速度翻倍，制動距離也翻倍', '速度對停車距離沒有影響', '速度翻倍，制動距離增加三倍'], exp: '制動距離與速度的平方成正比。如果您將速度從25英里/小時提高到50英里/小時（翻倍），制動距離增加四倍而不是兩倍。以60英里/小時行駛約需180英尺才能停下；以30英里/小時只需約45英尺。這就是超速如此危險的原因。' },
  es: { q: '¿Cómo afecta la velocidad a su distancia de frenado?', opts: ['Duplicar su velocidad cuadruplica (4x) su distancia de frenado', 'Duplicar su velocidad duplica su distancia de frenado', 'La velocidad no tiene efecto en la distancia de frenado', 'Duplicar su velocidad triplica su distancia de frenado'], exp: 'La distancia de frenado aumenta con el cuadrado de su velocidad. Si duplica su velocidad de 25 a 50 mph, su distancia de frenado aumenta cuatro veces — no dos. A 60 mph se necesitan unos 180 pies para detenerse; a 30 mph, solo unos 45 pies.' },
  ans: 0
},

{
  id: 69, cat: 'speed',
  en: {
    q: 'What is the speed limit for vehicles towing a trailer on a California freeway?',
    opts: ['55 mph maximum, regardless of the posted speed limit', '65 mph — same as regular vehicles', '70 mph if the posted limit is 70', '45 mph for all towing situations'],
    exp: 'In California, vehicles towing a trailer are limited to 55 mph on freeways, even if the posted limit is 65 or 70 mph. The same 55 mph limit applies to trucks with 3 or more axles. This lower limit accounts for reduced braking ability and stability when towing.'
  },
  zh: { q: '在加州高速公路上，拖曳拖车的车辆限速是多少？', opts: ['最高55英里/小时，无论标志限速如何', '65英里/小时——与普通车辆相同', '如果标志限速为70则为70英里/小时', '所有拖曳情况均为45英里/小时'], exp: '在加州，拖曳拖车的车辆在高速公路上限速55英里/小时，即使标志限速为65或70英里/小时。有3轴或以上的卡车也适用同样的55英里/小时限制。较低的限速考虑到拖曳时制动能力和稳定性降低的因素。' },
  zhTW: { q: '在加州高速公路上，拖曳拖車的車輛限速是多少？', opts: ['最高55英里/小時，無論標誌限速如何', '65英里/小時——與普通車輛相同', '如果標誌限速為70則為70英里/小時', '所有拖曳情況均為45英里/小時'], exp: '在加州，拖曳拖車的車輛在高速公路上限速55英里/小時，即使標誌限速為65或70英里/小時。有3軸或以上的卡車也適用同樣的55英里/小時限制。較低的限速考慮到拖曳時制動能力和穩定性降低的因素。' },
  es: { q: '¿Cuál es el límite de velocidad para vehículos que remolcan un tráiler en una autopista de California?', opts: ['55 mph máximo, independientemente del límite publicado', '65 mph — igual que los vehículos regulares', '70 mph si el límite publicado es 70', '45 mph para todas las situaciones de remolque'], exp: 'En California, los vehículos que remolcan un tráiler están limitados a 55 mph en autopistas, incluso si el límite publicado es 65 o 70 mph. El mismo límite de 55 mph aplica a camiones con 3 o más ejes. Este límite más bajo tiene en cuenta la reducción en la capacidad de frenado y estabilidad.' },
  ans: 0
},

{
  id: 70, cat: 'speed',
  en: {
    q: 'Driving 100 mph or more on a California highway results in:',
    opts: ['Mandatory license suspension and possible jail time — an immediate threat to public safety', 'A regular speeding ticket with doubled fines', 'Only a warning for a first offense', 'License suspension only if involved in a crash'],
    exp: 'Driving 100 mph or more is a serious offense in California. Penalties include: license suspension of 30 days to 6 months for a first offense, fines, possible jail time, and a point on your record. A second offense within 3 years results in a 1-year license revocation.'
  },
  zh: { q: '在加州公路上以100英里/小时或以上速度行驶的后果是：', opts: ['强制吊销驾照及可能的监禁——对公共安全构成立即威胁', '普通超速罚单，罚款加倍', '初次仅给予警告', '仅在发生事故时才吊销驾照'], exp: '以100英里/小时或以上速度行驶在加州是严重违规行为。处罚包括：初次违规驾照暂停30天至6个月、罚款、可能的监禁，以及记录一分。3年内二次违规导致驾照被吊销1年。' },
  zhTW: { q: '在加州公路上以100英里/小時或以上速度行駛的後果是：', opts: ['強制吊銷駕照及可能的監禁——對公共安全構成立即威脅', '普通超速罰單，罰款加倍', '初次僅給予警告', '僅在發生事故時才吊銷駕照'], exp: '以100英里/小時或以上速度行駛在加州是嚴重違規行為。處罰包括：初次違規駕照暫停30天至6個月、罰款、可能的監禁，以及記錄一分。3年內二次違規導致駕照被吊銷1年。' },
  es: { q: 'Conducir a 100 mph o más en una autopista de California resulta en:', opts: ['Suspensión de licencia obligatoria y posible tiempo en cárcel — una amenaza inmediata para la seguridad pública', 'Una multa de velocidad regular con multas duplicadas', 'Solo una advertencia por primera ofensa', 'Suspensión de licencia solo si hay un accidente'], exp: 'Conducir a 100 mph o más es una ofensa grave en California. Las penalidades incluyen: suspensión de licencia de 30 días a 6 meses por primera ofensa, multas, posible tiempo en cárcel y un punto en su registro. Una segunda ofensa dentro de 3 años resulta en revocación de licencia de 1 año.' },
  ans: 0
},

] // end of questions array — more batches to be appended
