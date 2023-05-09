var url = "https://restapi-futbolistas-mysql-service-bernarm111.cloud.okteto.net/api/futbolistas";

function postFutbolista() {

	console.log(url);

	var myName = $('#name').val();
	var myAge = $('#age').val();
	var myNationality = $('#nationality').val();
	var myHeight = $('#height_cm').val();
	var myWeight = $('#weight_kg').val();
	var myClub = $('#club').val();
	var myPosition = $('#position').val();
	var myGoals = $('#goals').val();
	var myAssists = $('#assists').val();
	var myImage = $('#image').val();


	var myfutbolista = {
		name: myName,
		age: myAge,
		nationality: myNationality,
		height_cm: myHeight,
		weight_kg: myWeight,
		club: myClub,
		position: myPosition,
		goals: myGoals,
		assists: myAssists,
		image: myImage		
	};
	console.log(myfutbolista);

	$.ajax({
		url: url,
		type: 'post',
		dataType: 'json',
		contentType: 'application/json',
		success: function (data) {
			console.log (data) ;
			$('#resultado').html(JSON.stringify(data.futbolista));
		},
		data: JSON.stringify(myfutbolista)
	});
}


function getFutbolistas() {
	console.log(url);

	$.getJSON(url,
		function(json) {
			console.log(json);

			var arrFutbolistas = json.futbolistas;

			var htmlTableFutbolistas = '<table border="1">';

			arrFutbolistas.forEach(function(item) {
				console.log(item);
				htmlTableFutbolistas += '<tr>' +
					'<td>' + item.id + '</td>' +
					'<td>' + item.name + '</td>' +
					'<td>' + item.age + '</td>' +
					'<td>' + item.nationality + '</td>' +
					'<td>' + item.height_cm + '</td>' +
					'<td>' + item.weight_kg + '</td>' +
					'<td>' + item.club + '</td>' +
					'<td>' + item.position + '</td>' +
					'<td>' + item.goals + '</td>' +
					'<td>' + item.assists + '</td>' +
					'<td><img src="' + item.image + '" width="150" height="150"></td>' + 
					'</tr>';

			});

			htmlTableFutbolistas +='</table>';

			$('#resultado').html(htmlTableFutbolistas);

		}
	);
}


