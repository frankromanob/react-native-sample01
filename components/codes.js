
<>
{!isLogged && (
    <View style={styles.container2}>
      <LoginScreen />
      <Pressable  style={styles.buttonLogin} 
            onPress={() => {setIsLogged(!isLogged); }}> 
            <Text style={styles.buttonText}> Log in </Text> 
      </Pressable>
    </View>
    )}
    
    {isLogged && (
      <View style={[styles.container, 
                    colorScheme === 'light' ? { backgroundColor: '#fff' }: { backgroundColor: '#333333'} ]}>
          <LittleLemonHeader />
          {!showMenu && (<WelcomeScreen />)}
        
          <Pressable  style={styles.buttonLogin} 
            onPress={() => {setShowMenu(!showMenu); }}> 
            <Text style={styles.buttonText}> 
              {showMenu ? 'Home' : 'View Menu'} 
            </Text> 
          </Pressable> 

          {showMenu && (<MenuItems />)}
      </View>
    )}

      <View style={styles.body}>
            {isLogged && (<Pressable  style={styles.buttonLogin} 
              onPress={() => 
                {setIsLogged(!isLogged); 
                setShowMenu(!isLogged); }
                }> 
              <Text style={styles.buttonText}> Log out </Text> 
              </Pressable>
            )}
             <LittleLemonFooter />
      </View>      
 
      <StatusBar style="auto" />
      </>