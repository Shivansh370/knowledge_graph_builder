# Knowledge Graph Builder – LLM-Powered Data Structuring Platform

An enterprise-grade AI platform that transforms unstructured content into structured knowledge graphs and enables intelligent graph-based and semantic question answering using Large Language Models (LLMs).


## Overview

Knowledge Graph Builder enables organizations to convert unstructured enterprise data—such as PDFs, DOCX files, text documents, web pages, and multimedia sources—into searchable, structured knowledge graphs stored in Neo4j.

The platform combines Large Language Models, graph databases, vector embeddings, and semantic retrieval to make enterprise knowledge accessible through natural language.

The system:

- Ingests unstructured content from multiple sources
- Extracts entities, relationships, and metadata using LLMs
- Builds structured knowledge graphs in Neo4j
- Generates vector embeddings for semantic retrieval
- Supports graph-based and vector-based conversational search

This project was designed to simplify enterprise knowledge discovery and accelerate access to critical business information.


## Key Features

- Multi-source document ingestion
- PDF, DOCX, TXT, Web, and Video content processing
- Automated entity and relationship extraction
- Neo4j knowledge graph generation
- Graph visualization and exploration
- Hybrid retrieval (Graph + Vector Search)
- Conversational Q&A over ingested knowledge
- Full-text + embedding-based search
- Schema-driven graph extraction
- Multi-LLM support



## Tech Stack

- Python
- FastAPI
- React
- Neo4j
- LangChain
- Azure OpenAI
- GPT-4
- Vector Embeddings
- Docker
- Cloud Deployment


## Architecture

```text
Data Sources
(PDF / DOCX / TXT / Web / Video)
                ↓
        Content Extraction
                ↓
         LLM Processing
                ↓
 Entity + Relationship Extraction
                ↓
      Knowledge Graph Creation
                ↓
         Neo4j Graph Store
                ↓
     Vector Embedding Pipeline
                ↓
 Hybrid Retrieval + Chat Interface
```

---

## Project Structure

```text
backend/                FastAPI backend services
frontend/               React frontend
services/               LLM and graph processing
prompts/                Prompt templates
graph/                  Knowledge graph utilities
embeddings/             Vector search pipeline
utils/                  Utility functions
docker/                 Deployment configuration
```

---

## Key Contributions

- Developed a platform using FastAPI and React to convert unstructured content into structured Neo4j knowledge graphs using LLMs and LangChain.
- Built graph-based and vector-based conversational interfaces for interactive question answering over enterprise knowledge.
- Designed hybrid retrieval pipelines combining full-text search with semantic embedding search.
- Implemented scalable ingestion workflows for multi-format enterprise content processing.
- Enabled schema-driven graph extraction for domain-specific knowledge modeling.


## Supported Data Sources

- PDF Documents
- DOCX Files
- Text Files


## Screenshots

### Document Upload Interface

<img width="1918" height="1015" alt="Screenshot 2025-04-15 170351" src="https://github.com/user-attachments/assets/e57d829a-a3a6-41f8-8509-2d3cfc868528" />

### Knowledge Graph Visualization

<img width="1831" height="877" alt="image" src="https://github.com/user-attachments/assets/a5a4ddf5-9553-4d66-8a2f-41d3349eb8bf" />


### Conversational Search

<img width="1818" height="865" alt="image" src="https://github.com/user-attachments/assets/d372f1af-9c39-44a0-835a-9b4e5c29c815" />


## Business Impact

- Reduced manual knowledge extraction effort by ~68%
- Accelerated document-to-insight workflows
- Enabled natural language access to enterprise knowledge repositories


## Learning Outcomes

This project strengthened expertise in:

- Knowledge Graph Engineering
- Large Language Models
- Prompt Engineering
- LangChain Orchestration
- Graph Databases
- Vector Search
- FastAPI Backend Development
- React-based Frontend Development
- Enterprise AI Deployment



## Author

**Shivansh Bhatia**
