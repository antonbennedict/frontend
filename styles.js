import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
   
    container: {
        flex: 1,
        backgroundColor: 'pink', 
        alignItems: 'center',    
        justifyContent: 'center', 
        padding: 20,
    },


    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        color: '#333',
    },

 
    headerText: { 
        fontSize: 28,
        fontWeight: '700', 
        color: 'black', 
        textAlign: 'center',
        marginBottom: 40, 
        fontSize: 90, 
    },

   
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 12,
        marginVertical: 8,
        width: '30%',
        borderRadius: 8,
        backgroundColor: '#f9f9f9',
        fontSize: 16,
    },

 
    buttonWrapper: {
        marginTop: 20, 
        width: '30%',  
    },

    reviewContainer: {
        flex: 1,
        backgroundColor: 'pink', 
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },

    userCard: {
        backgroundColor: '#fff', 
        padding: 15, 
        marginVertical: 5, 
        borderRadius: 8, 
        borderLeftWidth: 5, 
        borderLeftColor: '#007bff', 
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 2, 
    },
   
    detailText: {
        fontSize: 14,
        color: '#333',
        lineHeight: 22, 
    },
 
    nameText: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 4,
        color: '#1a1a1a',
    }

    
    
   
});

export default styles;