define(['mongoose'], function(mongoose) {

	var sessionSchema = mongoose.Schema({
		name: String,
		body: mongoose.Schema.Types.Mixed
	});

	var Session = mongoose.model('session', sessionSchema);

	var DefaultBody = function(sessionId) {
		return {
			name: sessionId,
			body: {
				body: "empty"
			}
		};
	};

	var SessionRepository = (function() {
		mongoose.connect('mongodb://localhost/fakedb');
		var DB = mongoose.connection;

		DB.on('error', console.error.bind(console, 'connection error:'));
		DB.once('open', function callback() {
			console.log("DB is open!");
		});

		findOrCreate = function(sessionId, callback) {

			Session.find({
				name: sessionId
			}, function(err, sessions) {
				if (err || sessions.length === 0) {
					var session = new Session(new DefaultBody(sessionId));
					session.save();
					callback(session);
				} else {
					callback(sessions[0]);
				}
			});
		};

		save = function(session) {
			session.save();
		};

		return {
			get: findOrCreate,
			save: save
		};
	});

	return SessionRepository;

});
