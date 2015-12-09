if(Tasks.find().count() === 0){
		Tasks.insert({
			text:'Hello wordl',
			fecha: new Date()
		});
}