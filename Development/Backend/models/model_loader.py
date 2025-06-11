from sentence_transformers import SentenceTransformer

print("🔄 Loading model...")
model = SentenceTransformer('bert-base-nli-mean-tokens')
print("✅ Model loaded")

def get_model():
    return model
