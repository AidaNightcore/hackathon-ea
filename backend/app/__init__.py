from flask import Flask
from .database_manager import DatabaseManager
from .routes.auth_routes import auth_bp

def create_app():
    app = Flask(__name__)

    from .routes.auth_routes import auth_bp
    from .routes.parking_routes import parking_bp
    app.register_blueprint(auth_bp)
    app.register_blueprint(parking_bp)

    
    app.db_manager = DatabaseManager()

    return app
