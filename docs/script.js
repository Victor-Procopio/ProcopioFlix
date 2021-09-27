var ulCanais = document.getElementById("ulCanais");
var ulCanaisCiencias = document.getElementById("ulCanaisCiencias");
var ulFilmes = document.getElementById("ulFilmes");
var linksAdicionados = [];
var imgAdicionadas = [];

var sobreCanais = [
	"Alura",
	"Curso em Vídeo",
	"Código Fonte TV",
	"Filipe Deschamps",
	"O Programador",
	"Rafaella Ballerini",
	"Universo Programado",
	"Lucas Montano"
];

var linkCanais = [
	"https://youtube.com/c/Alura",
	"https://youtube.com/c/CursoemV%C3%ADdeo",
	"https://youtube.com/c/codigofontetv",
	"https://youtube.com/c/FilipeDeschamps",
	"https://youtube.com/c/OProgramadorReal",
	"https://youtube.com/c/rafaellaballerini",
	"https://youtube.com/c/UniversoProgramado",
	"https://youtube.com/c/LucasMontano"
];

var imgCanais = [
	"https://yt3.ggpht.com/ytc/AKedOLRszi3O39AB5-uw_1jkrxJppwegjToBgIKFIOqiiA=s176-c-k-c0x00ffffff-no-rj",
	"https://yt3.ggpht.com/ytc/AKedOLRIYqffphLkoTlUA-hlcySXppGOpDgcAFjLaiB2gg=s176-c-k-c0x00ffffff-no-rj",
	"https://yt3.ggpht.com/ytc/AKedOLTxp_yA1EqeS8rPJDe4m5qExsd3-OKqmlB3M6Oq5A=s176-c-k-c0x00ffffff-no-rj",
	"https://yt3.ggpht.com/ytc/AKedOLTnTjoDN70zAxQqnSOBfj9RxVQ5H0HMZXciBQHY=s176-c-k-c0x00ffffff-no-rj",
	"https://yt3.ggpht.com/ytc/AKedOLQ8eIZ8zJCe_sBT6vAvurRY0PHutkUB7wCViuOsgA=s176-c-k-c0x00ffffff-no-rj",
	"https://yt3.ggpht.com/3mP1Ica4tOxQXrb5vxfyja5P7grAdOCzjaxHOVGMWhFBw9dKQtAKimlhrXizP7nbZndFsBviQA=s176-c-k-c0x00ffffff-no-rj",
	"https://yt3.ggpht.com/ytc/AKedOLSldDZaJdQM2_OymaoEi2WpD3N1yUxhYL6550-kVw=s176-c-k-c0x00ffffff-no-rj",
	"https://yt3.ggpht.com/ytc/AKedOLRvK0aTLwSM_RzdgKVTPy7nsu-KVtEOrJxUrqrQoyo=s176-c-k-c0x00ffffff-no-rj"
];

var sobreCiencias = [
	"Manual do Mundo",
	"Ciência Todo Dia",
	"Ponto em Comum",
	"Minuto da Terra",
	"Minuto da Física",
	"Nerdologia"
];

var linkCiencias = [
	"https://www.youtube.com/c/manualdomundo",
	"https://www.youtube.com/c/CienciaTodoDia",
	"https://www.youtube.com/c/PontoemComumcomMigueleosHugobertos",
	"https://www.youtube.com/c/MinutoDaTerra",
	"https://www.youtube.com/c/MinutoDaFisica",
	"https://www.youtube.com/c/nerdologia"
];

var imgCiencias = [
	"https://yt3.ggpht.com/-pJxUP1wezj8SREiWAyEzlusc9_PIiMp-QBa5OAmx8w2iHvczS_Krl-MAPYIidgcFy8lpI2L4ow=s176-c-k-c0x00ffffff-no-rj",
	"https://yt3.ggpht.com/ytc/AKedOLRPqSvwTqTdMzwWt6FHZYvGqUjRbEfH_fiQyeAz2A=s176-c-k-c0x00ffffff-no-rj",
	"https://yt3.ggpht.com/ytc/AKedOLSJJkz0K2cVsVUL-7PVNHoUR6JwDWI6HdWpGOta1g=s176-c-k-c0x00ffffff-no-rj",
	"https://yt3.ggpht.com/ytc/AKedOLS5WbcT51l05QAFunUIWClW8OSuPhUkPsnSKsto0Q=s176-c-k-c0x00ffffff-no-rj",
	"https://yt3.ggpht.com/ytc/AKedOLRwT6Gj5kvdYFz1AQ6W-vNjBpJLsKMG43FfcgxySg=s176-c-k-c0x00ffffff-no-rj",
	"https://yt3.ggpht.com/ytc/AKedOLQAFEZv_GJt1LyUVUr7oyaxeIFpDio3NmYjKxNipw=s176-c-k-c0x00ffffff-no-rj"
];

var sobreFilmes = [
	"Vingadores: Ultimato",
	"Vingadores: Guerra Infinita",
	"Homem-Aranha: Longe de Casa",
	"Godzilla vs. Kong",
	"Interestelar",
	"Dragon Ball Super Broly",
	"One Piece Stampede"
];

var linkFilmes = [
	"https://youtu.be/PgrmbRID0eY", //Vingadores Ultimato
	"https://youtu.be/4jGRyEa2jhE", //Vingadores Guerra Infinita
	"https://youtu.be/MqQdHaBtvGs", //Homem-Aranha Longe de casa
	"https://youtu.be/kIET9yMABD8", //Godzilla vs Kong
	"https://youtu.be/i6avfCqKcQo", //Interestelar
	"https://youtu.be/j_GK-hYXga0", //Dragon Ball Super Broly
	"https://youtu.be/S8_YwFLCh4U" //OP:Stampede
];

var imgFilmes = [
	"https://th.bing.com/th/id/OIP.iAf-VzZLAZXHOb2HFuP8dgHaLH?w=186&h=279&c=7&r=0&o=5&dpr=1.38&pid=1.7",
	"https://th.bing.com/th/id/OIP.YUgoHbONN0ZC-Mc3ELSa4AHaKl?w=186&h=265&c=7&r=0&o=5&dpr=1.38&pid=1.7",
	"https://th.bing.com/th/id/OIP.kQHM65LZs42_AqYXIyZf-AHaK4?w=186&h=273&c=7&r=0&o=5&dpr=1.38&pid=1.7",
	"https://th.bing.com/th/id/OIP.yTOqdszq4xijhQJoIdSoGQHaLH?w=186&h=279&c=7&r=0&o=5&dpr=1.38&pid=1.7",
	"https://th.bing.com/th/id/OIP.CvtIgj5JfuahxvYLshH5FgHaK5?w=186&h=274&c=7&r=0&o=5&dpr=1.38&pid=1.7",
	"https://th.bing.com/th/id/OIP.PlXcereE3e8nZicryFjciAHaKj?w=186&h=265&c=7&r=0&o=5&dpr=1.38&pid=1.7",
	"https://th.bing.com/th/id/OIP.JkMKb1O3acQkvJVsON9yKwHaLH?w=186&h=279&c=7&r=0&o=5&dpr=1.38&pid=1.7"
];

for (var i = 0; i < linkCanais.length; i++) {
	ulCanais.innerHTML += `<li onmouseenter="mostrarTexto()" onmouseleave="ocultarTexto()"><a href="${linkCanais[i]}" target="_blank"><img src="${imgCanais[i]}" ></a><label>${sobreCanais[i]}</label></li>`;
}

for (i = 0; i < linkCiencias.length; i++) {
	ulCanaisCiencias.innerHTML += `<li onmouseenter="mostrarTexto()" onmouseleave="ocultarTexto()"><a href="${linkCiencias[i]}" target="_blank"><img src="${imgCiencias[i]}"></a><label>${sobreCiencias[i]}</label></li>`;
}

for (i = 0; i < linkFilmes.length; i++) {
	ulFilmes.innerHTML += `<li onmouseenter="mostrarTexto()" onmouseleave="ocultarTexto()"><a href="${linkFilmes[i]}" target="_blank"><img src="${imgFilmes[i]}"></a><label>${sobreFilmes[i]}</label></li>`;
}

function adicionar() {
	var nome = document.getElementById("nome");
	var url = document.getElementById("url");
	var imagem = document.getElementById("imagem");
	var categoria = document.getElementById("opcoesCategoria").value;

	if (nome.value != "" && url.value != "" && imagem.value != "") {
		//Verifica se já existe a url/imagem
		if (
			linksAdicionados.indexOf(url.value) == -1 &&
			imgAdicionadas.indexOf(imagem.value) == -1
		) {
			var elemento = `<li onmouseenter="mostrarTexto()" onmouseleave="ocultarTexto()"><button id="btnDeletar" onclick="deletar()"><img src="https://cdn.pixabay.com/photo/2017/11/10/05/24/trash-2935441_960_720.png"></button><a href="${url.value}" target="_blank"><img src="${imagem.value}" onerror="removerImagem()"></a><label>${nome.value}</label></li>`;
			switch (categoria) {
				case "ulCanais":
					ulCanais.innerHTML += elemento;
					break;
				case "ulCiencias":
					ulCanaisCiencias.innerHTML += elemento;
					break;
				case "ulFilmes":
					ulFilmes.innerHTML += elemento;
			}
			linksAdicionados.push(url.value);
			imgAdicionadas.push(imagem.value);
		} else {
			alert("Esta url/imagem já existe");
		}
	} else {
		alert("Preencha todos os campos!");
	}
	nome.value = "";
	url.value = "";
	imagem.value = "";
}

function deletar() {
	//Remove o canal/filme
	var target = event.currentTarget;
	var li = target.parentElement;
	var ul = li.parentElement;
	var url = li.children[1].href;
	var img = li.children[1].firstChild.src;
	linksAdicionados.splice(linksAdicionados.indexOf(url), 1);
	imgAdicionadas.splice(imgAdicionadas.indexOf(img), 1);
	ul.removeChild(li);
}

function removerImagem() {
	//Remove o canal/filme se a imagem não for valida
	var ul = event.currentTarget.parentElement.parentElement.parentElement;
	var li = event.currentTarget.parentElement.parentElement;
	ul.removeChild(li);

	linksAdicionados.splice(linksAdicionados.indexOf(url), 1);
	imgAdicionadas.splice(imgAdicionadas.indexOf(imagem), 1);
	alert("Coloque uma imagem válida!");
}

function mostrarTexto() {
	var target = event.currentTarget;
	target.lastChild.style.opacity = "1";
	if (target.firstChild.id == "btnDeletar") {
		target.firstChild.style.opacity = "1";
	}
}

function ocultarTexto() {
	var target = event.currentTarget;
	target.lastChild.style.opacity = "0";
	if (target.firstChild.id == "btnDeletar") {
		target.firstChild.style.opacity = "0";
	}
}