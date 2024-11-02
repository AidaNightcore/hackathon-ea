
class ParkingSpace:
    def __init__(self, db_manager, id=None, owner_email=None, location_address=None, gps_coordinates=None, description=None, base_price=0.0, dynamic_pricing=False):
        self.db_manager = db_manager
        self.id = id
        self.owner_email = owner_email
        self.location_address = location_address
        self.gps_coordinates = gps_coordinates
        self.description = description
        self.base_price = base_price
        self.dynamic_pricing = dynamic_pricing

    def save(self):
        if self.id and self.exists():
            query = """
                UPDATE parking_space SET owner_email = ?, location_address = ?, gps_coordinates = ?, description = ?, base_price = ?, dynamic_pricing = ?
                WHERE id = ?
            """
            self.db_manager.execute_query(query, (self.owner_email, self.location_address, self.gps_coordinates, self.description, self.base_price, self.dynamic_pricing, self.id))
        else:
            query = """
                INSERT INTO parking_space (owner_email, location_address, gps_coordinates, description, base_price, dynamic_pricing)
                VALUES (?, ?, ?, ?, ?, ?)
            """
            self.db_manager.execute_query(query, (self.owner_email, self.location_address, self.gps_coordinates, self.description, self.base_price, self.dynamic_pricing))

    def delete(self):
        query = "DELETE FROM parking_space WHERE id = ?"
        self.db_manager.execute_query(query, (self.id,))

    def exists(self):
        query = "SELECT 1 FROM parking_space WHERE id = ?"
        return bool(self.db_manager.fetch_query(query, (self.id,)))

    @classmethod
    def load_from_db(cls, db_manager, id):
        query = "SELECT * FROM parking_space WHERE id = ?"
        result = db_manager.fetch_query(query, (id,))
        if result:
            parking_data = result[0]
            return cls(db_manager, *parking_data)
        return None
