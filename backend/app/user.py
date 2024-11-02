class User:
    def __init__(self, db_manager, email=None, password=None, phone_number=None, rating=0.0, balance=0.0, parking_lot=None, driver=False):
        self.db_manager = db_manager
        self.email = email
        self.password = password
        self.phone_number = phone_number
        self.rating = rating
        self.balance = balance
        self.parking_lot = parking_lot
        self.driver = driver

    def save(self):
        if self.email and self.exists():
            query = """
                UPDATE user_data SET password = ?, phone_number = ?, rating = ?, balance = ?, parking_lot = ?, driver = ?
                WHERE email = ?
            """
            self.db_manager.execute_query(query, (self.password, self.phone_number, self.rating, self.balance, self.parking_lot, self.driver, self.email))
        else:
            query = """
                INSERT INTO user_data (email, password, phone_number, rating, balance, parking_lot, driver)
                VALUES (?, ?, ?, ?, ?, ?, ?)
            """
            self.db_manager.execute_query(query, (self.email, self.password, self.phone_number, self.rating, self.balance, self.parking_lot, self.driver))

    def delete(self):
        query = "DELETE FROM user_data WHERE email = ?"
        self.db_manager.execute_query(query, (self.email,))

    def exists(self):
        query = "SELECT 1 FROM user_data WHERE email = ?"
        return bool(self.db_manager.fetch_query(query, (self.email,)))

    @classmethod
    def load_from_db(cls, db_manager, email):
        query = "SELECT * FROM user_data WHERE email = ?"
        result = db_manager.fetch_query(query, (email,))
        if result:
            user_data = result[0]
            return cls(db_manager, *user_data)
        return None