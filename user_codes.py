user_data = []

class userCode(models.Model):
    user_codes = ["ETHAN" , "TAIYO", "LUNA"]

# Return all current codes
def allCodes():
    return(user_codes)